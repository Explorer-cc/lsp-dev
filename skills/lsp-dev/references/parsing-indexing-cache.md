# Parsing, Indexing, And Cache

## Snapshots

Use immutable analysis snapshots for requests when possible. Apply document/workspace changes transactionally to the mutable host state.

## Cache Keys

Include:

- URI
- document version or content hash
- parser mode
- embedded language range
- configuration version
- dependency/index version

## Index Types

- Open-document index: fastest, required for unsaved files.
- Workspace index: definitions, references, workspace symbols.
- Dependency index: libraries, SDKs, external packages.
- Generated index: builtin APIs, stubs, docs.
- Remote index: large codebases or expensive dependency scans.

## Invalidation

Invalidate on:

- document change
- file create/delete/rename
- workspace folder change
- config change
- dependency/build config change
- generated data refresh

## Source Resolution

Resolve sources in this order unless the project says otherwise:

1. user/project configured path
2. toolchain/build-system discovery
3. dependency metadata
4. generated stubs
5. bundled fallback
