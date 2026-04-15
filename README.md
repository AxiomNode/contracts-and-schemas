# contracts-and-schemas

Canonical repository for AxiomNode API contracts and shared integration schemas.

## Scope

- Versioned OpenAPI contracts for internal and edge-facing APIs.
- Shared JSON Schema definitions for request/response validation.
- Event schemas for asynchronous workflows.

## Structure

- `schemas/openapi/`: OpenAPI specifications.
- `schemas/json/`: JSON schemas.
- `schemas/events/`: event contracts.
- `examples/`: sample payloads and usage examples.
- `scripts/validate_contracts.py`: OpenAPI + shared/event JSON Schema validation script.

## Main workflow

- `validate-contracts.yml`
	- Trigger: push (`main`, `develop`), pull request, manual dispatch.
	- Checks:
		- required schema directories exist
		- OpenAPI files are valid
		- JSON schemas are valid
		- event schemas are validated when present in `schemas/events/`

## Notes

- This repository is a dependency for multiple CI pipelines (including `secrets` and service repos).
- Contract updates should be coordinated with `shared-sdk-client` generation and service rollout plans.
