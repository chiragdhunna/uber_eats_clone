import base64
import json
import os
from pathlib import Path

from is_firebase_service_account_payload import supported_google_credentials_type


def load_credentials(raw_value: str) -> dict:
    try:
        return json.loads(raw_value)
    except json.JSONDecodeError:
        try:
            return json.loads(base64.b64decode(raw_value, validate=True).decode("utf-8"))
        except Exception as exc:
            raise SystemExit(
                "FIREBASE_SERVICE_ACCOUNT_JSON must be valid Google credentials JSON or a base64-encoded JSON document."
            ) from exc


def main() -> None:
    raw_value = os.environ["FIREBASE_SERVICE_ACCOUNT_JSON"].strip()
    credentials = load_credentials(raw_value)
    credentials_type = supported_google_credentials_type(credentials)
    if not credentials_type:
        raise SystemExit(
            "FIREBASE_SERVICE_ACCOUNT_JSON must be a supported Google credentials document "
            "(service_account, authorized_user, or external_account)."
        )

    runner_temp = os.environ.get("RUNNER_TEMP", "").strip()
    if not runner_temp:
        raise SystemExit("RUNNER_TEMP is not set.")

    runner_temp_path = Path(runner_temp)
    if not runner_temp_path.exists():
        raise SystemExit(f"RUNNER_TEMP does not exist: {runner_temp_path}")

    credentials_path = runner_temp_path / "firebase-service-account.json"
    credentials_path.write_text(json.dumps(credentials))
    credentials_path.chmod(0o600)

    for field in (
        "private_key",
        "private_key_id",
        "client_email",
        "client_id",
        "client_secret",
        "refresh_token",
        "project_id",
        "audience",
        "subject_token_type",
        "token_url",
    ):
        value = credentials.get(field)
        if value:
            print(f"::add-mask::{value}")
    client_email = credentials.get("client_email", "")
    if "@" in client_email:
        print(f"::add-mask::{client_email.split('@', 1)[1]}")
    print(f"::add-mask::{raw_value}")

    github_env = Path(os.environ["GITHUB_ENV"])
    with github_env.open("a") as env_file:
        env_file.write(f"GOOGLE_APPLICATION_CREDENTIALS={credentials_path}\n")
        if credentials_type in {"service_account", "external_account"}:
            env_file.write(f"FIREBASE_CREDENTIALS_FILE={credentials_path}\n")
        else:
            env_file.write("FIREBASE_CREDENTIALS_FILE=\n")
        env_file.write(f"FIREBASE_CREDENTIALS_TYPE={credentials_type}\n")


if __name__ == "__main__":
    main()
