import { validateOptions } from '../experimental'
import type { JestConfigWithTsJest, TsJestTransformerOptions } from '../types'

/**
 * @internal
 *
 * Future config options for experimental features
 */
export interface FutureConfig {
  /**
   * Enable validation of ts-jest options to detect typos and invalid configurations
   *
   * @default undefined (disabled)
   */
  experimental_validateOptions?: boolean
}

/**
 * @internal
 *
 * Jest configuration with ts-jest that includes future experimental options
 */
export interface InitialTestConfig extends JestConfigWithTsJest {
  future?: FutureConfig
}

/**
 * Helper function to define a Jest configuration with ts-jest.
 * This function provides type safety and runtime validation for experimental features.
 *
 * @example
 * ```typescript
 * import { defineConfig } from 'ts-jest'
 *
 * export default defineConfig({
 *   testEnvironment: 'node',
 *   future: {
 *     // experimental features go here
 *   }
 * })
 * ```
 */
export const defineConfig = (config: InitialTestConfig): InitialTestConfig => {
  if ('future' in config) {
    if (typeof config.future !== 'object' || config.future === null || Array.isArray(config.future)) {
      throw new TypeError("Invalid 'future' configuration: Future config must be an object")
    }

    if (config.future?.experimental_validateOptions) {
      if (config.transform) {
        for (const [, transformer] of Object.entries(config.transform)) {
          if (Array.isArray(transformer) && transformer.length > 1) {
            const [transformerName, options] = transformer
            if (typeof transformerName === 'string' && transformerName === 'ts-jest') {
              validateOptions(options as TsJestTransformerOptions)
            }
          }
        }
      }
    }
  }

  return config
}
