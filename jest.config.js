module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './test/tsconfig.json'
    }]
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/test/**/*.test.ts']
};
