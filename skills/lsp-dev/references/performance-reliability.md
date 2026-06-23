# Performance And Reliability

## Hot Path Rules

- Completion, hover, signature help, and definition must not block on broad workspace scans.
- External tools need cache, timeout, cancellation, and fallback.
- Documentation-heavy completion should use resolve or cached rendered docs.
- Large files should degrade gracefully.

## Scheduler

Use background work for:

- workspace indexing
- dependency scanning
- full diagnostics
- generated metadata refresh

Use foreground work only for cheap context lookup and cached queries.

## Cancellation

Respect cancellation for:

- completion
- references
- workspace symbols
- diagnostics
- semantic tokens
- code actions

Suppress stale async results using document version checks.

## Observability

Expose:

- trace logging
- slow request logging
- index status
- external tool failures
- diagnostic timing
