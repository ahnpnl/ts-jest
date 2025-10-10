---
id: experimental
title: Experimental Features
---

This documentation outlines the experimental features in `ts-jest` that are available for early adoption. These features are designed to gather feedback and will eventually become official features after a series of releases once they are stable.

:::danger Breaking Changes in Minor Versions

Features prefixed by `experimental_` are subject to changes in **minor versions**, and not considered as Semantic Versioning breaking changes.

:::

## Available Experimental Features

### Config options validation

To detect typos and invalid configuration options, one can enable this config option validation via the option `experimental_validateOptions` under `future` option with `defineConfig` function:

```ts title="jest.config.ts"
import { defineConfig } from 'ts-jest'

export default defineConfig({
  // ... Jest config options
  future: {
    experimental_validateOptions: true,
  },
})
```

### Coming Soon

Stay tuned for upcoming experimental features that will be added to `ts-jest`. Each feature will include:

- A clear description of its purpose
- Usage examples
- Known limitations or caveats
- Migration guidance for when the feature becomes stable

## Migration Path

When experimental features mature and become stable:

1. The feature will be documented in the main documentation
2. The feature flag in `future` may be deprecated
3. A migration guide will be provided
4. The feature will eventually become the default behavior in a future major version

## Feedback

If you're using experimental features, your feedback is valuable! Please share your experience:

- Open an issue on [GitHub](https://github.com/kulshekhar/ts-jest/issues)
- Join the discussion on [Discord](https://discord.gg/j6FKKQQrW9)
- Start a conversation in [GitHub Discussions](https://github.com/kulshekhar/ts-jest/discussions)

## Example Configuration

Here's a complete example of a Jest configuration using `defineConfig`:

```ts title="jest.config.ts"
import { defineConfig } from 'ts-jest'

export default defineConfig({
  // ... Jest config options
  future: {
    //... feature flags
  },
})
```
