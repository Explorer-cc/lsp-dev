# Client Integration

## Client Responsibilities

- activation
- language selector
- server path and transport
- initialization options
- configuration sync
- commands
- output/log channel
- status/progress UI
- package runtime files

## Transport

Support the transport expected by the target client:

- stdio for generic clients
- IPC for VS Code Node extensions
- socket/named pipe for daemon or remote use
- web worker for browser/web extensions

## Configuration Changes

When settings change:

1. update client schema
2. notify server
3. invalidate affected caches
4. recompute diagnostics or indexes only when needed

## Multi-Client Rule

Keep editor-specific behavior in client adapters. Keep the server protocol-compliant and editor-neutral unless the project explicitly targets one editor.
