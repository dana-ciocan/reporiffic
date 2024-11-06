/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.(j|t)s?(x)',
    'utils',
    '!**/*.stories.tsx',
    '!src/types/*',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['lcov'],
  moduleNameMapper: { '\\.(css|scss)$': 'identity-obj-proxy' },
  preset: 'ts-jest',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    path: '.env.test',
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
