import { validateOptions } from './option-validator'

describe('validateOptions', () => {
  it('should detect unrecognized options', () => {
    expect(() =>
      validateOptions({
        tsconfig: 'tsconfig.json',
        astTransformer: ['transformer.js'],
      }),
    ).toThrow(Error('Invalid key: Expected never but received "astTransformer"'))
  })

  it('should work with all valid options', () => {
    expect(() =>
      validateOptions({
        tsconfig: {},
        isolatedModules: false,
        compiler: 'ttypescript',
        astTransformers: { before: [] },
        diagnostics: true,
        babelConfig: true,
        stringifyContentPathRegex: '\\.html$',
        useESM: true,
      }),
    ).not.toThrow()
  })
})
