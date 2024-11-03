module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/unit/**/*.test.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: ["src/**/*.js", "!src/app.js"],
};
