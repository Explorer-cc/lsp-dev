# Engine Strategies

## Identify The Backend

Classify the project before implementing features:

- Compiler frontend: best for precise diagnostics, types, definitions, symbols.
- External language service: best when a mature tool already exists; write a thin adapter.
- Static analyzer: best for diagnostics and type facts; may need separate parser for editor latency.
- Custom semantic model: best for domain-specific languages or embedded languages.
- Generated metadata: best for API-heavy languages, libraries, frameworks, and stubs.
- Lightweight parser/scanner: best for narrow features, embedded code, or early prototypes.

## Adapter Rule

If using an external engine, isolate it:

- normalize paths and URIs
- map positions and ranges
- translate diagnostics
- cache engine responses
- recover when the engine is missing or slow
- expose settings for engine path/version

## Major Change Rule

Switching from scanner to AST parser, AST parser to tree-sitter, tree-sitter to compiler frontend, or local engine to external service is a project-level decision. Ask before changing this.
