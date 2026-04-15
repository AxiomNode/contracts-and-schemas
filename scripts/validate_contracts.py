#!/usr/bin/env python3
"""Validate OpenAPI and JSON Schema contracts in this repository."""

from __future__ import annotations

import json
import sys
from pathlib import Path

import yaml
from jsonschema import Draft202012Validator
from openapi_spec_validator import validate_spec


def _list_schema_files(schema_dir: Path) -> list[Path]:
    files = sorted(schema_dir.glob("*.json"))
    files.extend(sorted(schema_dir.glob("*.yml")))
    files.extend(sorted(schema_dir.glob("*.yaml")))
    return files


def _validate_openapi_files(base_dir: Path) -> list[str]:
    errors: list[str] = []
    openapi_dir = base_dir / "schemas" / "openapi"
    files = sorted(openapi_dir.glob("*.y*ml"))

    if not files:
        errors.append(f"No OpenAPI files found in {openapi_dir}")
        return errors

    for file_path in files:
        try:
            with file_path.open("r", encoding="utf-8") as handle:
                spec = yaml.safe_load(handle)
            validate_spec(spec)
        except Exception as exc:  # pragma: no cover - defensive CI validation
            errors.append(f"OpenAPI invalid: {file_path.name}: {exc}")

    return errors


def _validate_json_schema_files(base_dir: Path) -> list[str]:
    errors: list[str] = []
    schema_dir = base_dir / "schemas" / "json"
    files = _list_schema_files(schema_dir)

    if not files:
        errors.append(f"No JSON schema files found in {schema_dir}")
        return errors

    for file_path in files:
        try:
            with file_path.open("r", encoding="utf-8") as handle:
                if file_path.suffix == ".json":
                    schema = json.load(handle)
                else:
                    schema = yaml.safe_load(handle)
            Draft202012Validator.check_schema(schema)
        except Exception as exc:  # pragma: no cover - defensive CI validation
            errors.append(f"JSON Schema invalid: {file_path.name}: {exc}")

    return errors


def _validate_event_schema_files(base_dir: Path) -> list[str]:
    errors: list[str] = []
    schema_dir = base_dir / "schemas" / "events"
    files = _list_schema_files(schema_dir)

    for file_path in files:
        try:
            with file_path.open("r", encoding="utf-8") as handle:
                if file_path.suffix == ".json":
                    schema = json.load(handle)
                else:
                    schema = yaml.safe_load(handle)
            Draft202012Validator.check_schema(schema)
        except Exception as exc:  # pragma: no cover - defensive CI validation
            errors.append(f"Event schema invalid: {file_path.name}: {exc}")

    return errors


def main() -> int:
    base_dir = Path(__file__).resolve().parents[1]
    errors = []
    errors.extend(_validate_openapi_files(base_dir))
    errors.extend(_validate_json_schema_files(base_dir))
    errors.extend(_validate_event_schema_files(base_dir))

    if errors:
        print("Contract validation failed:")
        for error in errors:
            print(f" - {error}")
        return 1

    print("All contracts are valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
