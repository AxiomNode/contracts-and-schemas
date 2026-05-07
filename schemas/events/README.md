# Event Schemas

Last updated: 2026-05-07.

## Purpose

Event schemas for asynchronous integrations and internal platform telemetry.

## Scope

Use this section for event payload contracts that must stay stable across publishers and consumers.

Current event contracts:

| Schema | Publisher | Consumers | Scope |
|---|---|---|---|
| `game-generation-completed.v1.json` | `ai-engine` generation flow | observability, Backoffice, future event consumers | Internal telemetry event emitted after a successful game payload generation. |
| `game-generation-failed.v1.json` | `ai-engine` generation flow | observability, Backoffice, future event consumers | Internal telemetry event emitted after a failed game payload generation. |

These schemas describe event envelopes, not public REST request or response payloads. Backward-compatible additions should use optional payload fields or a new versioned schema when consumers need a stricter contract.
