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

    credentials_path = Path(os.environ["RUNNER_TEMP"]) / "firebase-service-account.json"
    credentials_path.write_text(json.dumps(credentials))

    for field in ("private_key", "private_key_id", "client_email", "client_id"):
        value = credentials.get(field)
        if value:
            print(f"::add-mask::{value}")
    print(f"::add-mask::{raw_value}")

    github_env = Path(os.environ["GITHUB_ENV"])
    with github_env.open("a") as env_file:
        env_file.write(f"GOOGLE_APPLICATION_CREDENTIALS={credentials_path}\n")
        env_file.write(f"FIREBASE_CREDENTIALS_FILE={credentials_path}\n")


if __name__ == "__main__":
    main()
