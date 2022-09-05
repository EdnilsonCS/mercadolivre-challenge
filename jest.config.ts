export default {
  verbose: true,
  setupFilesAfterEnv: ['./__test__/setupTests.tsx'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{js,tsx,ts}'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/public'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'tsx', 'ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__test__/mocks/file.tsx',
  },
};
