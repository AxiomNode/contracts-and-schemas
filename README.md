# contracts-and-schemas

Repositorio canonico de contratos API y esquemas de integracion.

## Objetivo

- Versionar contratos OpenAPI por dominio.
- Centralizar JSON Schema para validacion de payloads.
- Definir eventos y su evolucion para integraciones asincronas.

## Estructura

- `schemas/openapi/`: contratos HTTP.
- `schemas/json/`: esquemas de validacion.
- `schemas/events/`: contratos de eventos.
- `examples/`: ejemplos de uso por version.

## Contratos iniciales publicados

- `schemas/openapi/internal-microservice-quizz.v1.yaml`
- `schemas/openapi/internal-microservice-wordpass.v1.yaml`
- `schemas/openapi/internal-microservice-users.v1.yaml`
- `schemas/openapi/internal-ai-engine.v1.yaml`

## Objetos JSON compartidos

- `schemas/json/game-generate.request.v1.json`
- `schemas/json/random-game.query.v1.json`
- `schemas/json/leaderboard.query.v1.json`

## CI

Incluye `validate-contracts.yml` para validar carpetas base, especificaciones OpenAPI y JSON Schema en cada push/PR.
