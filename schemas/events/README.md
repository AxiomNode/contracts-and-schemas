# Event Schemas

Last updated: 2026-11-12.

> **Status: NOT IMPLEMENTED (future work).** Nothing in the platform publishes or consumes these
> events: there is no message broker, and a search of every AxiomNode repository on `origin/main`
> (2026-11-12) finds no producer, no consumer and no reference to these schema files. The only
> telemetry that exists today is the HTTP `POST /events` ingestion of the ai-engine stats app,
> which uses a different payload (prompt, response, latency, success, game_type, metadata).
> The schemas are kept as a design proposal, not as a contract in force.

## Purpose

Event schemas proposed for asynchronous integrations and internal platform telemetry (not implemented).

## Scope

Use this section for event payload contracts that must stay stable across publishers and consumers.

Proposed event contracts (no implementation exists):

| Schema | Intended publisher | Intended consumers | Scope |
|---|---|---|---|
| `game-generation-completed.v1.json` | `ai-engine` generation flow | observability, Backoffice, future event consumers | Proposed telemetry event for a successful game payload generation. |
| `game-generation-failed.v1.json` | `ai-engine` generation flow | observability, Backoffice, future event consumers | Proposed telemetry event for a failed game payload generation. |

These schemas describe event envelopes, not public REST request or response payloads. Backward-compatible additions should use optional payload fields or a new versioned schema when consumers need a stricter contract.
