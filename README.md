# LSP Development Skill

An installable Codex and Claude skill for building Language Server Protocol servers and editor integrations.

The skill covers protocol capability negotiation, document sync, completion, hover, signature help, diagnostics, definitions, references, semantic tokens, rename, code actions, workspace indexing, client/server wiring, packaging, testing, and performance-sensitive editor behavior.

## Install

Use npm without a global install:

```bash
npx @kasmir/lsp-dev-skill install codex
npx @kasmir/lsp-dev-skill install claude
```

Install into an explicit skills directory:

```bash
npx @kasmir/lsp-dev-skill install --target ~/.codex/skills
npx @kasmir/lsp-dev-skill install --target ~/.claude/skills
```

Replace an existing install:

```bash
npx @kasmir/lsp-dev-skill install codex --force
```

## Manual Install

Copy `skills/lsp-dev` into your agent's skills directory.

Common locations:

- Codex: `~/.codex/skills/lsp-dev`
- Claude: `~/.claude/skills/lsp-dev`

If your client uses a different skills directory, copy the folder there or use `--target`.

## Validate

```bash
npm test
npm run doctor
```

The validator checks the required `SKILL.md`, referenced files, `references/`, and `agents/openai.yaml`.

## Publish

```bash
npm pack
npm publish --access public
```

Test the packed artifact before publishing:

```bash
npm pack
npx ./kasmir-lsp-dev-skill-0.1.0.tgz install --target ./tmp/skills
```

## License

MIT
