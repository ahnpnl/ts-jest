import { defineConfig } from './define-config'

describe('defineConfig', () => {
  describe('future config validation', () => {
    it('should return the config when future option is an empty object', () => {
      expect(
        defineConfig({
          testEnvironment: 'node',
          future: {},
        }),
      ).toEqual({
        testEnvironment: 'node',
        future: {},
      })
    })

    it('should throw TypeError when future option is not an object', () => {
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: 'invalid',
        }),
      ).toThrow(TypeError)
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: 'invalid',
        }),
      ).toThrow(/Invalid 'future' configuration/)
    })

    it('should throw TypeError when future option is an array', () => {
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: [],
        }),
      ).toThrow(TypeError)
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: [],
        }),
      ).toThrow(/Invalid 'future' configuration/)
    })

    it('should throw TypeError when future option is null', () => {
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: null,
        }),
      ).toThrow(TypeError)
      expect(() =>
        defineConfig({
          testEnvironment: 'node',
          // @ts-expect-error Testing invalid type
          future: null,
        }),
      ).toThrow(/Invalid 'future' configuration/)
    })
  })
})
