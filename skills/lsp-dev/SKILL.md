---
name: lsp-dev
description: General Language Server Protocol development guide. Use when designing, implementing, debugging, testing, optimizing, or packaging language servers and editor integrations for any language, including protocol capability negotiation, document sync, completion, hover, signature help, diagnostics, definition, references, document symbols, semantic tokens, rename, code actions, workspace indexing, client/server wiring, external language-service adapters, and performance-sensitive editor behavior.
---

# LSP Development

## Core Workflow

1. Classify the task: protocol wiring, client integration, analysis engine, parser/index/cache, provider, diagnostics, tests, or packaging.
2. Identify the language-intelligence source: compiler frontend, custom semantic model, external language service, static analyzer, generated metadata, or lightweight parser.
3. Check LSP capability negotiation before changing behavior.
4. Keep LSP adapters thin. Put language semantics behind an internal IDE/service API.
5. Keep hot-path requests fast: completion, hover, signature help, definition, and document symbols.
6. Add focused tests for protocol-visible behavior.
7. Run the repository's build, unit, smoke, and package checks as applicable.

## Reference Routing

- For project shape and boundaries, read `references/architecture.md`.
- For protocol capability design, read `references/capability-matrix.md`.
- For choosing or adapting a language-intelligence backend, read `references/engine-strategies.md`.
- For completion, hover, signature help, definition, references, symbols, semantic tokens, rename, and code actions, read `references/provider-workflows.md`.
- For parsing, indexing, workspace state, snapshots, and caches, read `references/parsing-indexing-cache.md`.
- For diagnostics, read `references/diagnostics.md`.
- For VS Code, Neovim, generic clients, commands, logs, and settings, read `references/client-integration.md`.
- For tests, fixtures, fuzzing, and regression checks, read `references/testing-quality.md`.
- For latency, cancellation, threading, memory, and large workspaces, read `references/performance-reliability.md`.
- For distribution, bundled runtime data, editor marketplaces, package registries, and binaries, read `references/release-packaging.md`.
- For choices that require user confirmation, read `references/decision-points.md`.

## Non-Negotiables

- Do not assume a specific language, parser, editor, runtime, or package manager.
- Do not let LSP protocol types leak deep into the semantic engine unless the project is intentionally tiny.
- Do not run workspace scans, external tools, or expensive type checks directly in completion or hover without cache, timeout, and cancellation.
- Do not publish noisy diagnostics by default.
- Do not advertise capabilities that are unimplemented or only partially valid.
- Ask before switching parser families, indexing scope, diagnostics model, release target, or editor support target.
