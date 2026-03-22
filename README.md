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

## CI

Incluye `validate-contracts.yml` para validar estructura base del repositorio.
