# Decision Points

Ask before choosing:

- parser strategy: scanner, regex fallback, AST parser, tree-sitter, compiler frontend
- engine strategy: custom engine, external language service, static analyzer, generated metadata
- indexing scope: open documents, workspace, dependencies, remote index
- diagnostics model: syntax-only, semantic, lint-style, compiler-backed, save-only, on-type
- client target: one editor, generic LSP, multi-editor, web extension
- release target: local package, editor marketplace, package registry, binary
- performance tradeoff: eager indexing versus lazy lookup
- source resolution policy: configured paths, toolchain discovery, stubs, bundled fallback
