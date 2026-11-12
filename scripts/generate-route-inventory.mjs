#!/usr/bin/env node
// Generates schemas/route-inventory/edge-routes.md from the route registrations
// (app.get/post/put/patch/delete("/path", ...)) found in the source of api-gateway,
// bff-mobile and bff-backoffice. No dependencies; Node 18+.
//
// Usage:
//   node scripts/generate-route-inventory.mjs <reposRoot> [--sha repo=commit ...] [--date YYYY-MM-DD]
//
// <reposRoot> is a directory that contains one folder per repository
// (api-gateway/, bff-mobile/, bff-backoffice/), each with src/app/**/*.ts.
// Output goes to stdout; redirect it to schemas/route-inventory/edge-routes.md.
// The inventory lists method and path only. Request/response shapes are NOT described.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const REPOS = ["api-gateway", "bff-mobile", "bff-backoffice"];
const ROUTE_RE = /\bapp\.(get|post|put|patch|delete)\s*(?:<[^>]*>)?\(\s*(["'`])([^"'`]+)\2/g;

function parseArgs(argv) {
  const args = { root: null, shas: {}, date: new Date().toISOString().slice(0, 10) };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--sha") {
      const [name, sha] = String(argv[++i] ?? "").split("=");
      if (name && sha) args.shas[name] = sha;
    } else if (argv[i] === "--date") {
      args.date = argv[++i];
    } else if (!args.root) {
      args.root = argv[i];
    }
  }
  if (!args.root) {
    console.error("Usage: generate-route-inventory.mjs <reposRoot> [--sha repo=commit] [--date YYYY-MM-DD]");
    process.exit(2);
  }
  return args;
}

function listTsFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listTsFiles(full));
    else if (name.endsWith(".ts") && !name.endsWith(".test.ts")) out.push(full);
  }
  return out;
}

const { root, shas, date } = parseArgs(process.argv.slice(2));
const lines = [];
lines.push("# Edge route inventory (api-gateway, bff-mobile, bff-backoffice)");
lines.push("");
lines.push(`Generated on ${date} by \`scripts/generate-route-inventory.mjs\` from the route registrations in source.`);
lines.push("This is an inventory of paths and methods only. It is NOT an OpenAPI contract: request and response");
lines.push("shapes are not described. Regenerate it instead of editing it by hand.");
lines.push("");
lines.push("Sources:");
for (const repo of REPOS) lines.push(`- ${repo}${shas[repo] ? ` @ \`${shas[repo]}\`` : ""}`);
lines.push("");

for (const repo of REPOS) {
  const srcDir = join(root, repo, "src", "app");
  const rows = [];
  for (const file of listTsFiles(srcDir)) {
    const text = readFileSync(file, "utf8");
    const rel = relative(join(root, repo), file).replace(/\\/g, "/");
    for (const m of text.matchAll(ROUTE_RE)) {
      const line = text.slice(0, m.index).split("\n").length;
      rows.push({ method: m[1].toUpperCase(), path: m[3], where: `${rel}:${line}` });
    }
  }
  lines.push(`## ${repo} (${rows.length} routes)`);
  lines.push("");
  lines.push("| Method | Path | Registered at |");
  lines.push("|---|---|---|");
  for (const r of rows) lines.push(`| ${r.method} | \`${r.path}\` | \`${r.where}\` |`);
  lines.push("");
}

process.stdout.write(lines.join("\n"));
