export default {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  testRegex: '(\\.|/)(test|spec)\\.(m)?ts$',
  coverageDirectory: 'coverage',
	collectCoverage: true,
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.mts',
    '!src/**/*.d.ts',
    '!src/**/*.d.mts',
    '!src/**/*.spec.ts',
    '!src/errors/*',
    '!src/common/*',
  ],
	testTimeout: 20 * 1000
};
