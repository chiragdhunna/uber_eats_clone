import json
import sys


def main() -> int:
    raw = sys.stdin.read().strip()
    if not raw:
        return 1

    try:
        payload = json.loads(raw)
    except json.JSONDecodeError:
        return 1

    if not isinstance(payload, dict):
        return 1

    required_fields = ("private_key", "client_email", "project_id")
    if all(payload.get(field) for field in required_fields):
        return 0

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
