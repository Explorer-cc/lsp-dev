# Testing And Quality

## Test Levels

- parser tests
- semantic engine tests
- provider tests
- protocol tests
- smoke tests
- packaged-artifact tests
- editor integration tests
- fuzz or mutation tests for robustness

## Fixtures

Cover:

- empty files
- incomplete syntax
- syntax errors
- unsaved changes
- nested constructs
- embedded languages
- large files
- missing dependencies
- platform paths
- workspace changes

## Assertions

Completion:

- expected candidate present
- invalid candidate absent
- insert text correct
- docs/detail correct

Hover:

- null outside context
- signature/docs/source present when expected

Definition:

- URI/range correct
- fallback correct

Diagnostics:

- range, severity, message, code
- stale diagnostics suppressed
- disabled diagnostics suppressed or cleared

Reliability:

- malformed input does not crash server
- cancellation does not corrupt state
- file changes invalidate caches correctly
