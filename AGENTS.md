# Agent Instructions

## Project Shape

This repository packages the `lsp-dev` skill for installation through npm and manual copy.

- `skills/lsp-dev/` is the canonical skill directory.
- `skills/lsp-dev/SKILL.md` is the skill entry point.
- `skills/lsp-dev/references/` contains LSP development references loaded by the skill.
- `skills/lsp-dev/agents/openai.yaml` contains UI metadata.
- `bin/lsp-dev-skill.mjs` is the npm CLI installer.
- `scripts/validate.mjs` validates the packaged skill structure.

Do not recreate root-level `SKILL.md` or root-level `references/`. Those were intentionally moved under `skills/lsp-dev/`.

## Skill Content Rules

Keep the skill focused on Language Server Protocol development only.

Allowed topics include:

- LSP protocol capabilities and initialization
- document sync, diagnostics, completion, hover, signature help, definitions, references, semantic tokens, rename, and code actions
- parser, index, cache, snapshot, and workspace model design
- editor client integration for LSP clients
- packaging and distribution of language servers or editor extensions
- testing, performance, cancellation, logging, and reliability for LSP implementations

Do not add skill instructions about publishing this repository, npm package maintenance, GitHub release management, Codex installation, or Claude installation inside `skills/lsp-dev/SKILL.md` or `skills/lsp-dev/references/`. Repository publishing instructions belong in `README.md`, `package.json`, CI, or scripts.

If release-related wording appears in the skill, make sure it clearly refers to distributing an LSP server or editor integration, not distributing this skill package.

## Development

Use zero-dependency Node.js scripts unless there is a strong reason to add a dependency.

Validate after changes:

```bash
npm test
```

Check the installer behavior:

```bash
node bin/lsp-dev-skill.mjs install --target tmp/skills --force
```

Check npm package contents before publishing:

```bash
npm pack --dry-run
```

Remove `tmp/` after local install tests. It is ignored and should not be committed.

## Validation Expectations

`scripts/validate.mjs` should fail when:

- `skills/lsp-dev/SKILL.md` is missing or has invalid frontmatter
- referenced `references/*.md` files are missing
- `skills/lsp-dev/references/` contains nested directories
- `skills/lsp-dev/agents/openai.yaml` is missing

Keep this validator conservative. It protects the npm package from accidentally publishing duplicate or stale skill content.

## Release Notes

Before publishing, verify the packed artifact rather than only testing the source checkout.

Expected package contents are:

- `bin/`
- `scripts/`
- `skills/lsp-dev/`
- `README.md`
- `LICENSE`
- `package.json`

Do not include `tmp/`, caches, local npm artifacts, or duplicate skill copies.
