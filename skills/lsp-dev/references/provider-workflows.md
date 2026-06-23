# Provider Workflows

## Completion

1. Detect context cheaply: code/comment/string, embedded region, receiver, prefix, trigger.
2. Choose candidate sources: keywords, snippets, locals, imports, workspace symbols, dependency APIs, generated metadata.
3. Keep documentation lazy with completion resolve when candidate count is large.
4. Use stable sort and avoid hiding valid candidates too aggressively.
5. Test empty prefix, trigger characters, invalid contexts, snippets, and docs.

## Hover

1. Resolve symbol identity in priority order: local, imported, dependency, builtin, generated.
2. Return signature/type/docs/source when reliable.
3. Return null when context is uncertain.
4. Avoid project-wide work on hover.

## Signature Help

1. Parse the active call and active parameter.
2. Handle nested calls and incomplete syntax.
3. Reuse engine or index signatures.
4. Keep overloads and optional/default parameters readable.

## Definition And References

1. Resolve semantic identity before file location.
2. Prefer real source over generated metadata.
3. Normalize URI and range.
4. Include fallback behavior for missing sources.
5. For references, use index-backed search or cancellable scans.

## Symbols, Semantic Tokens, Rename, Code Actions

- Document symbols should be stable and structural.
- Semantic tokens need a stable legend and deterministic output.
- Rename requires prepare-rename and conflict handling.
- Code actions should be minimal, diagnostic-backed when possible, and safe for workspace edits.
