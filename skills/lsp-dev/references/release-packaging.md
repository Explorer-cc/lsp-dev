# Release And Packaging

## Package Contents

Include:

- compiled server
- client adapter if any
- runtime dependencies
- generated indexes/stubs/docs
- license/readme/config schema

Exclude:

- source-only files when not needed
- local dependency stores
- caches
- test fixtures unless needed
- generated debug artifacts
- private local paths

## Release Targets

Confirm before choosing:

- local artifact
- editor marketplace
- package registry
- standalone binary
- multi-editor distribution

## Verification

Test the packaged artifact, not just source checkout.
