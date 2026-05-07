# contracts-and-schemas

Last updated: 2026-05-08.

Canonical repository for AxiomNode API contracts and shared integration schemas.

## Responsibility

- Versioned OpenAPI contracts for internal and edge-facing APIs.
- Shared JSON Schema definitions for request/response validation.
- Event schemas for asynchronous workflows.

## Runtime role

### Ownership boundary

This repository is the contract source of truth for cross-repository integration.

It should own:

- transport-level request and response structure
- shared schema versioning
- event payload semantics used across repositories

It should not own service implementation details, deployment policy, or UI behavior.

## Runtime surface

### Structure

- `schemas/openapi/`: OpenAPI specifications.
- `schemas/json/`: JSON schemas.
- `schemas/events/`: event contracts.
- `examples/`: sample payloads and usage examples.
- `scripts/validate_contracts.py`: OpenAPI + shared/event JSON Schema validation script.

### Downstream consumers

Primary consumers include:

- `api-gateway`
- `bff-mobile`
- `bff-backoffice`
- domain microservices
- `shared-sdk-client`
- `secrets` CI validation in full cross-repo mode

## Local setup

### Main workflow

- `validate-contracts.yml`
	- Trigger: push (`main`, `develop`), pull request, manual dispatch.
	- Checks:
		- required schema directories exist
		- OpenAPI files are valid
		- JSON schemas are valid
		- event schemas are validated when present in `schemas/events/`

## Dependencies and contracts

### Notes

- This repository is a dependency for multiple CI pipelines (including `secrets` and service repos).
- Contract updates should be coordinated with `shared-sdk-client` generation and service rollout plans.
- `internal-microservice-users.v1.yaml` defines the canonical user-role enum, currently including `SuperAdmin`, `Admin`, `Inspector`, `Viewer`, and `Gamer`.

## Documentation

- `examples/README.md`
- `schemas/openapi/README.md`
- `schemas/json/README.md`
- `schemas/events/README.md`

## Deployment and operations notes

### Documentation scope

Keep this repository documentation concrete about schema ownership, validation workflow, and release coordination. Project-wide architecture belongs in the central `docs` repository.

## References
