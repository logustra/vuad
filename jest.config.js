module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: ['<rootDir>/.jest/setup.js'],
  testMatch: [
    '<rootDir>/src/components/**/**/*.test.tsx',
    '<rootDir>/src/tests/**/*.test.tsx',
    '<rootDir>/src/modules/**/tests/**/*.test.tsx'
  ],

  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': '<rootDir>/.jest/transform.js',
    '.+\\.(css|scss|svg|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/modules/$1',
    '^atoms': '<rootDir>/src/components/atoms',
    '^molecules': '<rootDir>/src/components/molecules',
    '^organisms': '<rootDir>/src/components/organisms',
    '^templates': '<rootDir>/src/components/templates',
    '^vue$': 'vue/dist/vue.common.js'
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
}
