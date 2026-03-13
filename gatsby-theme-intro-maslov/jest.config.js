module.exports = {
  // Use the built-in alias 'jsdom' which maps to the installed jsdom environment
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/file-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
