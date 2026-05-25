import json
import sys


def supported_google_credentials_type(payload: dict) -> str | None:
    if not isinstance(payload, dict):
        return None

    payload_type = payload.get("type")
    if payload_type == "authorized_user":
        required_fields = ("client_id", "client_secret", "refresh_token")
    elif payload_type == "external_account":
        required_fields = ("audience", "subject_token_type", "token_url", "credential_source")
    elif payload_type == "service_account" or all(
        isinstance(payload.get(field), str) and payload.get(field).strip()
        for field in ("private_key", "client_email", "project_id")
    ):
        required_fields = ("private_key", "client_email", "project_id")
        payload_type = "service_account"
    else:
        return None

    if all(
        payload.get(field) not in (None, "")
        and (not isinstance(payload.get(field), str) or payload.get(field).strip())
        for field in required_fields
    ):
        return payload_type

    return None


def main() -> int:
    raw = sys.stdin.read().strip()
    if not raw:
        return 1

    try:
        payload = json.loads(raw)
    except json.JSONDecodeError:
        return 1

    return 0 if supported_google_credentials_type(payload) else 1


if __name__ == "__main__":
    raise SystemExit(main())
