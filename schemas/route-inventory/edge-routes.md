# Edge route inventory (api-gateway, bff-mobile, bff-backoffice)

Generated on 2026-11-12 by `scripts/generate-route-inventory.mjs` from the route registrations in source.
This is an inventory of paths and methods only. It is NOT an OpenAPI contract: request and response
shapes are not described. Regenerate it instead of editing it by hand.

Sources:
- api-gateway @ `23e067b`
- bff-mobile @ `a3a3fc5`
- bff-backoffice @ `eb4a4a7`

## api-gateway (67 routes)

| Method | Path | Registered at |
|---|---|---|
| GET | `/health` | `src/app/routes/health.ts:7` |
| GET | `/v1/health` | `src/app/routes/health.ts:11` |
| GET | `/monitor/stats` | `src/app/routes/monitoring.ts:14` |
| GET | `/monitor/logs` | `src/app/routes/monitoring.ts:18` |
| GET | `/metrics` | `src/app/routes/monitoring.ts:35` |
| GET | `/internal/admin/ai-engine/target` | `src/app/routes/proxy.ts:245` |
| PUT | `/internal/admin/ai-engine/target` | `src/app/routes/proxy.ts:253` |
| DELETE | `/internal/admin/ai-engine/target` | `src/app/routes/proxy.ts:271` |
| POST | `/internal/ai-engine/generate/quiz` | `src/app/routes/proxy.ts:280` |
| POST | `/internal/ai-engine/generate/word-pass` | `src/app/routes/proxy.ts:289` |
| POST | `/internal/ai-engine/ingest/quiz` | `src/app/routes/proxy.ts:298` |
| POST | `/internal/ai-engine/ingest/word-pass` | `src/app/routes/proxy.ts:303` |
| GET | `/internal/ai-engine/catalogs` | `src/app/routes/proxy.ts:308` |
| GET | `/internal/ai-engine/health` | `src/app/routes/proxy.ts:313` |
| GET | `/internal/ai-engine/stats` | `src/app/routes/proxy.ts:318` |
| POST | `/v1/backoffice/auth/session` | `src/app/routes/proxy.ts:323` |
| GET | `/v1/backoffice/auth/me` | `src/app/routes/proxy.ts:332` |
| GET | `/v1/mobile/games/categories` | `src/app/routes/proxy.ts:341` |
| GET | `/v1/mobile/player/profile` | `src/app/routes/proxy.ts:346` |
| PUT | `/v1/mobile/player/profile` | `src/app/routes/proxy.ts:351` |
| POST | `/v1/mobile/games/events` | `src/app/routes/proxy.ts:356` |
| GET | `/v1/mobile/games/quiz/random` | `src/app/routes/proxy.ts:361` |
| GET | `/v1/mobile/games/wordpass/random` | `src/app/routes/proxy.ts:371` |
| POST | `/v1/mobile/games/quiz/generate` | `src/app/routes/proxy.ts:381` |
| POST | `/v1/mobile/games/wordpass/generate` | `src/app/routes/proxy.ts:386` |
| GET | `/v1/backoffice/users/leaderboard` | `src/app/routes/proxy.ts:391` |
| GET | `/v1/backoffice/monitor/stats` | `src/app/routes/proxy.ts:405` |
| POST | `/v1/backoffice/users/events/manual` | `src/app/routes/proxy.ts:414` |
| GET | `/v1/backoffice/admin/users/roles` | `src/app/routes/proxy.ts:423` |
| PATCH | `/v1/backoffice/admin/users/roles/:firebaseUid` | `src/app/routes/proxy.ts:432` |
| GET | `/v1/backoffice/services` | `src/app/routes/proxy.ts:446` |
| GET | `/v1/backoffice/services/operational-summary` | `src/app/routes/proxy.ts:455` |
| GET | `/v1/backoffice/kubernetes/overview` | `src/app/routes/proxy.ts:464` |
| GET | `/v1/backoffice/ai-engine/target` | `src/app/routes/proxy.ts:473` |
| GET | `/v1/backoffice/ai-engine/plugin/capabilities` | `src/app/routes/proxy.ts:482` |
| PUT | `/v1/backoffice/ai-engine/target` | `src/app/routes/proxy.ts:491` |
| DELETE | `/v1/backoffice/ai-engine/target` | `src/app/routes/proxy.ts:500` |
| GET | `/v1/backoffice/ai-engine/presets` | `src/app/routes/proxy.ts:509` |
| POST | `/v1/backoffice/ai-engine/presets` | `src/app/routes/proxy.ts:518` |
| PUT | `/v1/backoffice/ai-engine/presets/:presetId` | `src/app/routes/proxy.ts:527` |
| DELETE | `/v1/backoffice/ai-engine/presets/:presetId` | `src/app/routes/proxy.ts:541` |
| POST | `/v1/backoffice/ai-engine/probe` | `src/app/routes/proxy.ts:555` |
| GET | `/v1/backoffice/ai-engine/connections` | `src/app/routes/proxy.ts:564` |
| POST | `/v1/backoffice/ai-engine/connections` | `src/app/routes/proxy.ts:573` |
| PUT | `/v1/backoffice/ai-engine/connections/:presetId` | `src/app/routes/proxy.ts:582` |
| DELETE | `/v1/backoffice/ai-engine/connections/:presetId` | `src/app/routes/proxy.ts:596` |
| POST | `/v1/backoffice/ai-engine/connections/:presetId/activate` | `src/app/routes/proxy.ts:610` |
| GET | `/v1/backoffice/ai-diagnostics/rag/stats` | `src/app/routes/proxy.ts:624` |
| POST | `/v1/backoffice/ai-diagnostics/tests/run` | `src/app/routes/proxy.ts:633` |
| GET | `/v1/backoffice/ai-diagnostics/tests/status` | `src/app/routes/proxy.ts:642` |
| GET | `/v1/backoffice/service-targets` | `src/app/routes/proxy.ts:651` |
| PUT | `/v1/backoffice/service-targets/:service` | `src/app/routes/proxy.ts:660` |
| DELETE | `/v1/backoffice/service-targets/:service` | `src/app/routes/proxy.ts:674` |
| GET | `/v1/backoffice/services/:service/metrics` | `src/app/routes/proxy.ts:688` |
| GET | `/v1/backoffice/services/:service/logs` | `src/app/routes/proxy.ts:702` |
| GET | `/v1/backoffice/services/:service/data` | `src/app/routes/proxy.ts:716` |
| GET | `/v1/backoffice/services/:service/catalogs` | `src/app/routes/proxy.ts:730` |
| POST | `/v1/backoffice/services/:service/data` | `src/app/routes/proxy.ts:744` |
| PATCH | `/v1/backoffice/services/:service/data/:entryId` | `src/app/routes/proxy.ts:758` |
| POST | `/v1/backoffice/services/:service/generation/process` | `src/app/routes/proxy.ts:772` |
| POST | `/v1/backoffice/services/:service/generation/wait` | `src/app/routes/proxy.ts:786` |
| GET | `/v1/backoffice/services/:service/generation/processes` | `src/app/routes/proxy.ts:800` |
| GET | `/v1/backoffice/services/:service/generation/process/:taskId` | `src/app/routes/proxy.ts:814` |
| GET | `/v1/backoffice/services/:service/generation/worker` | `src/app/routes/proxy.ts:828` |
| POST | `/v1/backoffice/services/:service/generation/worker/start` | `src/app/routes/proxy.ts:842` |
| POST | `/v1/backoffice/services/:service/generation/worker/stop` | `src/app/routes/proxy.ts:856` |
| DELETE | `/v1/backoffice/services/:service/data/:entryId` | `src/app/routes/proxy.ts:870` |

## bff-mobile (12 routes)

| Method | Path | Registered at |
|---|---|---|
| GET | `/health` | `src/app/routes/health.ts:7` |
| GET | `/v1/mobile/player/profile` | `src/app/routes/mobile.ts:306` |
| PUT | `/v1/mobile/player/profile` | `src/app/routes/mobile.ts:316` |
| POST | `/v1/mobile/games/events` | `src/app/routes/mobile.ts:338` |
| GET | `/v1/mobile/games/categories` | `src/app/routes/mobile.ts:357` |
| GET | `/v1/mobile/games/quiz/random` | `src/app/routes/mobile.ts:373` |
| GET | `/v1/mobile/games/wordpass/random` | `src/app/routes/mobile.ts:392` |
| POST | `/v1/mobile/games/quiz/generate` | `src/app/routes/mobile.ts:411` |
| POST | `/v1/mobile/games/wordpass/generate` | `src/app/routes/mobile.ts:427` |
| GET | `/monitor/stats` | `src/app/routes/monitoring.ts:14` |
| GET | `/monitor/logs` | `src/app/routes/monitoring.ts:18` |
| GET | `/metrics` | `src/app/routes/monitoring.ts:36` |

## bff-backoffice (51 routes)

| Method | Path | Registered at |
|---|---|---|
| GET | `/v1/backoffice/services` | `src/app/routes/backoffice.ts:1425` |
| GET | `/v1/backoffice/services/operational-summary` | `src/app/routes/backoffice.ts:1432` |
| GET | `/v1/backoffice/kubernetes/overview` | `src/app/routes/backoffice.ts:1543` |
| GET | `/v1/backoffice/service-targets` | `src/app/routes/backoffice.ts:1555` |
| GET | `/v1/backoffice/routing/history` | `src/app/routes/backoffice.ts:1564` |
| GET | `/v1/backoffice/service-targets/:service` | `src/app/routes/backoffice.ts:1580` |
| PUT | `/v1/backoffice/service-targets/:service` | `src/app/routes/backoffice.ts:1593` |
| DELETE | `/v1/backoffice/service-targets/:service` | `src/app/routes/backoffice.ts:1623` |
| GET | `/v1/backoffice/ai-engine/target` | `src/app/routes/backoffice.ts:1637` |
| GET | `/v1/backoffice/ai-engine/plugin/capabilities` | `src/app/routes/backoffice.ts:1642` |
| GET | `/v1/backoffice/ai-engine/connections` | `src/app/routes/backoffice.ts:1652` |
| POST | `/v1/backoffice/ai-engine/connections` | `src/app/routes/backoffice.ts:1657` |
| PUT | `/v1/backoffice/ai-engine/connections/:presetId` | `src/app/routes/backoffice.ts:1676` |
| DELETE | `/v1/backoffice/ai-engine/connections/:presetId` | `src/app/routes/backoffice.ts:1707` |
| POST | `/v1/backoffice/ai-engine/connections/:presetId/activate` | `src/app/routes/backoffice.ts:1721` |
| GET | `/v1/backoffice/ai-engine/presets` | `src/app/routes/backoffice.ts:1751` |
| POST | `/v1/backoffice/ai-engine/probe` | `src/app/routes/backoffice.ts:1756` |
| POST | `/v1/backoffice/ai-engine/presets` | `src/app/routes/backoffice.ts:1777` |
| PUT | `/v1/backoffice/ai-engine/presets/:presetId` | `src/app/routes/backoffice.ts:1798` |
| DELETE | `/v1/backoffice/ai-engine/presets/:presetId` | `src/app/routes/backoffice.ts:1833` |
| PUT | `/v1/backoffice/ai-engine/target` | `src/app/routes/backoffice.ts:1848` |
| DELETE | `/v1/backoffice/ai-engine/target` | `src/app/routes/backoffice.ts:1870` |
| POST | `/v1/backoffice/auth/session` | `src/app/routes/backoffice.ts:1883` |
| GET | `/v1/backoffice/auth/me` | `src/app/routes/backoffice.ts:1890` |
| GET | `/v1/backoffice/users/leaderboard` | `src/app/routes/backoffice.ts:1897` |
| GET | `/v1/backoffice/monitor/stats` | `src/app/routes/backoffice.ts:1913` |
| POST | `/v1/backoffice/users/events/manual` | `src/app/routes/backoffice.ts:1920` |
| GET | `/v1/backoffice/admin/users/roles` | `src/app/routes/backoffice.ts:1927` |
| PATCH | `/v1/backoffice/admin/users/roles/:firebaseUid` | `src/app/routes/backoffice.ts:1934` |
| GET | `/v1/backoffice/services/:service/metrics` | `src/app/routes/backoffice.ts:1946` |
| GET | `/v1/backoffice/services/:service/logs` | `src/app/routes/backoffice.ts:1964` |
| GET | `/v1/backoffice/services/:service/data` | `src/app/routes/backoffice.ts:2009` |
| GET | `/v1/backoffice/services/:service/catalogs` | `src/app/routes/backoffice.ts:2078` |
| POST | `/v1/backoffice/services/:service/data` | `src/app/routes/backoffice.ts:2095` |
| PATCH | `/v1/backoffice/services/:service/data/:entryId` | `src/app/routes/backoffice.ts:2105` |
| POST | `/v1/backoffice/services/:service/generation/process` | `src/app/routes/backoffice.ts:2116` |
| POST | `/v1/backoffice/services/:service/generation/wait` | `src/app/routes/backoffice.ts:2126` |
| GET | `/v1/backoffice/services/:service/generation/processes` | `src/app/routes/backoffice.ts:2136` |
| GET | `/v1/backoffice/services/:service/generation/process/:taskId` | `src/app/routes/backoffice.ts:2156` |
| GET | `/v1/backoffice/services/:service/generation/worker` | `src/app/routes/backoffice.ts:2167` |
| POST | `/v1/backoffice/services/:service/generation/worker/start` | `src/app/routes/backoffice.ts:2196` |
| POST | `/v1/backoffice/services/:service/generation/worker/stop` | `src/app/routes/backoffice.ts:2217` |
| DELETE | `/v1/backoffice/services/:service/data/:entryId` | `src/app/routes/backoffice.ts:2231` |
| GET | `/v1/backoffice/ai-diagnostics/rag/stats` | `src/app/routes/backoffice.ts:2246` |
| POST | `/v1/backoffice/ai-diagnostics/tests/run` | `src/app/routes/backoffice.ts:2264` |
| GET | `/v1/backoffice/ai-diagnostics/tests/status` | `src/app/routes/backoffice.ts:2293` |
| GET | `/health` | `src/app/routes/health.ts:7` |
| GET | `/monitor/stats` | `src/app/routes/monitoring.ts:14` |
| GET | `/monitor/logs` | `src/app/routes/monitoring.ts:18` |
| GET | `/metrics` | `src/app/routes/monitoring.ts:36` |
| GET | `/v1/backoffice/admin/audit` | `src/app/server.ts:125` |

