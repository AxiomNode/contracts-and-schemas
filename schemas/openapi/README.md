# OpenAPI Schemas

Last updated: 2026-11-12.

## Purpose

Versioned OpenAPI contracts by domain.

## Scope

Use this section for transport-level HTTP contracts shared across repositories.

## Coverage and status

The files here are hand-written. Nothing generates code from them; their only consumers are the
validation workflow and documentation. They were checked against the routes registered on
`origin/main` of each service on 2026-11-12.

| File | Describes | Coverage |
|---|---|---|
| `internal-microservice-quizz.v1.yaml` | microservice-quizz | All routes registered by `shared-sdk-client` `typescript/src/game-routes.ts` plus health and monitoring. Some request bodies (`/games/generate/process*`, `/games/ingest`, `/games/history/manual`) are still undocumented. |
| `internal-microservice-wordpass.v1.yaml` | microservice-word-pass | Same as quizz. |
| `internal-microservice-users.v1.yaml` | microservice-users | All routes on main. `POST /users/me/games/events/batch` is marked `x-status: unmerged-pr-5`: it comes from the open pull request AxiomNode/microservice-users#5 and is not on main. |
| `internal-ai-engine.v1.yaml` | ai-engine | Partial: routes tagged `x-source: code-inventory` list path, method and summary only. |

The api-gateway, bff-mobile and bff-backoffice have no OpenAPI file. Their route lists are in
`../route-inventory/edge-routes.md` (paths and methods only, generated from code).
