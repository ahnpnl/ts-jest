import * as v from 'valibot'

import type { TsJestTransformerOptions } from '../types'

/**
 * Valibot schema for ts-jest options validation
 */
const tsJestOptionsSchema = v.strictObject({
  tsconfig: v.optional(v.union([v.string(), v.record(v.string(), v.any())])),
  isolatedModules: v.optional(v.boolean()),
  compiler: v.optional(v.string()),
  astTransformers: v.optional(v.record(v.string(), v.any())),
  diagnostics: v.optional(v.union([v.boolean(), v.record(v.string(), v.any())])),
  babelConfig: v.optional(v.union([v.boolean(), v.string(), v.record(v.string(), v.any())])),
  stringifyContentPathRegex: v.optional(v.union([v.string(), v.instance(RegExp)])),
  useESM: v.optional(v.boolean()),
})

/**
 * @internal
 *
 * Validates `ts-jest` transformer options with both TypeScript types and runtime validation about unrecognized options to help catch typos and configuration errors.
 */
export const validateOptions = (options: TsJestTransformerOptions): void => {
  try {
    v.parse(tsJestOptionsSchema, options)
  } catch (error) {
    if (error instanceof v.ValiError) {
      throw new Error(error.message)
    }

    throw error
  }
}
