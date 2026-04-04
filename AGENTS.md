# AGENTS

## Repo purpose
Canonical contracts repo for OpenAPI specs, JSON schemas, and event schemas.

## Key paths
- schemas/openapi/: versioned API contracts
- schemas/json/: shared payload schemas
- schemas/events/: event contracts
- scripts/validate_contracts.py: validation entrypoint

## Local commands
- python scripts/validate_contracts.py

## CI/CD notes
- validate-contracts workflow enforces schema validity on PR/push.
- Downstream repos depend on these contracts for SDK and service updates.

## LLM editing rules
- Prefer additive, versioned contract changes.
- Do not silently break existing schema fields.
- Update examples/docs in the same change set.
