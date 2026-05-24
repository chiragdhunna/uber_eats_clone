import base64
import json
import os
from pathlib import Path


def load_credentials(raw_value: str) -> dict:
    try:
        return json.loads(raw_value)
    except json.JSONDecodeError:
        try:
            return json.loads(base64.b64decode(raw_value).decode("utf-8"))
        except Exception as exc:
            raise SystemExit(
                "FIREBASE_SERVICE_ACCOUNT_JSON must be valid JSON or a base64-encoded JSON document."
            ) from exc


def main() -> None:
    raw_value = os.environ["FIREBASE_SERVICE_ACCOUNT_JSON"].strip()
    credentials = load_credentials(raw_value)
    required_fields = ("private_key", "client_email", "project_id")
    missing_fields = [field for field in required_fields if not credentials.get(field)]
    if missing_fields:
        raise SystemExit(
            f"FIREBASE_SERVICE_ACCOUNT_JSON is missing required field(s): {', '.join(missing_fields)}."
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

    for field in ("private_key", "private_key_id", "client_email", "client_id", "project_id"):
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
        env_file.write(f"FIREBASE_CREDENTIALS_FILE={credentials_path}\n")


if __name__ == "__main__":
    main()
