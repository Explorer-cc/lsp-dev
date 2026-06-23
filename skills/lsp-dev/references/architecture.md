# Architecture

## Common Layers

- Editor client: activation, server startup, transport, commands, settings, logs, status.
- Protocol server: initialize, capabilities, document sync, request/notification handlers.
- Document store: open documents, versions, incremental changes, URI/path normalization.
- Analysis engine: parser, AST, semantic model, type model, symbol resolver.
- Workspace model: roots, project files, dependencies, build configuration, virtual files.
- Indexes: document index, workspace index, dependency/library index, generated builtin index, remote index.
- Providers: completion, hover, signature help, definition, references, symbols, diagnostics, semantic tokens, code actions.
- Runtime services: cache, cancellation, scheduler, logging, telemetry, configuration.
- Test surface: parser tests, engine tests, provider tests, protocol tests, smoke tests, editor tests.
- Packaging: bundled server, client extension, generated data, binary/runtime dependencies.

## Boundary Rule

Expose an internal IDE/service API above the semantic engine. That API should speak editor concepts such as URI, range, offset, label, detail, documentation, edits, and diagnostics. Keep compiler or parser internals behind it.

## Mature Patterns

- rust-analyzer pattern: semantic engine below an IDE API boundary with immutable analysis snapshots.
- clangd pattern: open-file workers, build configuration, AST reuse, and global index.
- TypeScript language server pattern: thin LSP adapter over an existing language service.
- JDT LS pattern: LSP layer backed by mature compiler and build-system services.

## Generated Files

Before editing generated files, identify their source script or build step. Prefer changing the generator unless the generated file is intentionally maintained.
