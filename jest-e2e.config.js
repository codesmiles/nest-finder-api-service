module.exports = {
  preset: "jest-puppeteer",
  testEnvironment: "node",
  testMatch: ["**/tests/e2e/**/*.test.js"],
  setupFilesAfterEnv: ["expect-puppeteer"],
};
