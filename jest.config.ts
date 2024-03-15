/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.(j|t)s?(x)',
    'scripts/generate',
    'utils',
    '!**/*.types.ts',
    '!**/*.stories.tsx',
    '!**/*.variants.tsx',
    '!src/components/index.ts',
    '!src/index.ts',
    '!scripts/generate/templates.ts',
    '!scripts/generate/constants.ts',
    '!scripts/generate/types.ts',
    '!src/types/*',
    '!utils/index.ts',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['lcov'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: { '\\.(css|scss)$': 'identity-obj-proxy' },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['src'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
