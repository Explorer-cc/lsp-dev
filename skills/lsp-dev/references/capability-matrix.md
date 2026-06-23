# Capability Matrix

## Initialize

Advertise only implemented capabilities. Record:

- static or dynamic registration
- trigger characters
- resolve providers
- workDoneProgress support
- partial result support
- push or pull diagnostics
- semantic token full/delta support
- workspace folder support
- file operation support

## Document Sync

Choose deliberately:

- full sync for small/simple servers
- incremental sync for large files or serious editor use
- notebook sync only when needed

Always track document version and reject or ignore stale async results.

## Feature Checklist

Completion:

- trigger characters
- `completionItem/resolve`
- snippets
- commit characters
- insert/replace ranges

Diagnostics:

- push diagnostics or pull diagnostics
- debounce
- stale result suppression
- configuration enablement

Code actions:

- resolve provider
- diagnostic-backed actions
- source actions
- workspace edits

Semantic tokens:

- stable legend
- full versus delta
- multiline and overlapping token policy
