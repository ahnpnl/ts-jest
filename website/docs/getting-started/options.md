---
id: options
title: Options
---

### Define config

:::tip

The recommended way to configure Jest with `ts-jest` is using the `defineConfig` helper function. This provides out-of-the-box IntelliSense suggestions in your IDE and type safety for both Jest and `ts-jest` configuration options.

:::

The `defineConfig` function provides full TypeScript type checking for your Jest configuration as well as `ts-jest` config options, helping you catch configuration errors early.

```ts title="jest.config.ts"
import { defineConfig } from 'ts-jest'

export default defineConfig({
  // ... Jest config options
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest config options with autocomplete
        tsconfig: 'tsconfig.json',
      },
    ],
  },
})
```

#### Experimental: Option Validation

You can enable experimental option validation to detect typos and unrecognized options:

```ts title="jest.config.ts"
import { defineConfig } from 'ts-jest'

export default defineConfig({
  //... Jest config options
  future: {
    experimental_validateOptions: true,
  },
})
```

When `experimental_validateOptions` is enabled, `ts-jest` will warn you about unrecognized option keys (e.g., `astTransformer` instead of `astTransformers`), helping you catch configuration typos early.

See [Experimental Features](../experimental.md#option-validation) for more details about experimental features.

### Introduction

:::caution

If you are using custom `transform` config, please remove `preset` from your Jest config to avoid issues that Jest doesn't transform files correctly.

:::

All `ts-jest` specific options can be defined in Jest `transform` config object in the `package.json` file of your project,
or through a `jest.config.js`, or `jest.config.ts` file.

```ts title="jest.config.ts"
import type { Config } from 'jest'
import { createDefaultPreset } from 'ts-jest'

const config: Config = {
  // [...]
  ...createDefaultPreset(),
}

export default config
```

:::important

When using TypeScript Jest config file, Jest will use `ts-node` to compile the config file. `ts-jest` doesn't take part in
that process.

:::

### Options

All options have default values which should fit most of the projects. Click on the option's name to see details and example(s).

| Option                                                       | Description                                                                          | Type                          | Default        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------- | -------------- |
| [**`compiler`**][compiler]                                   | [TypeScript module to use as compiler.][compiler]                                    | `string`                      | `"typescript"` |
| [**`tsconfig`**][tsconfig]                                   | [TypeScript compiler related configuration.][tsconfig]                               | `string`\|`object`\|`boolean` | _auto_         |
| [**`isolatedModules`**][isolatedmodules]                     | [Disable type-checking][isolatedmodules]                                             | `boolean`                     | _disabled_     |
| [**`astTransformers`**][asttransformers]                     | [Custom TypeScript AST transformers][asttransformers]                                | `object`                      | _auto_         |
| [**`diagnostics`**][diagnostics]                             | [Diagnostics related configuration.][diagnostics]                                    | `boolean`\|`object`           | _enabled_      |
| [**`babelConfig`**][babelconfig]                             | [Babel(Jest) related configuration.][babelconfig]                                    | `boolean`\|`string`\|`object` | _disabled_     |
| [**`stringifyContentPathRegex`**][stringifycontentpathregex] | [Files which will become modules returning self content.][stringifycontentpathregex] | `string`\|`RegExp`            | _disabled_     |
| [**`useESM`**][useesm]                                       | [Enable ESM support][useesm]                                                         | `boolean`                     | _auto_         |

[compiler]: options/compiler
[tsconfig]: options/tsconfig
[isolatedmodules]: options/isolatedModules
[asttransformers]: options/astTransformers
[diagnostics]: options/diagnostics
[babelconfig]: options/babelConfig
[stringifycontentpathregex]: options/stringifyContentPathRegex
[useesm]: options/useESM
