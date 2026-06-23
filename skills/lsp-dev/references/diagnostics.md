# Diagnostics

## Pipeline

1. Schedule diagnostics after document changes.
2. Debounce.
3. Reuse parse/analysis caches.
4. Cancel stale runs.
5. Publish only for the current document version.
6. Clear diagnostics on close when the client expects it.

## Severity Policy

- Error: likely breaks parse/build/execution.
- Warning: likely mistake with actionable fix.
- Information: useful non-blocking fact.
- Hint: optional style or cleanup.

## Start With High Confidence

Prefer:

- syntax errors
- unresolved imports
- invalid configuration
- unknown symbols with strong evidence
- deprecated APIs from known metadata
- arity/type issues from reliable semantic facts

Avoid:

- speculative typo warnings
- duplicate root-cause reports
- full-workspace diagnostics on every keystroke
- diagnostics that disagree with the compiler without explanation
