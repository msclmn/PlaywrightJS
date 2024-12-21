// Used for the Test Reporter in GitHub Actions pipeline

module.exports = {
    testResultsProcessor: "jest-junit",
    coverageDirectory: "coverage",
    collectCoverage: true,
    reporters: ["default", "jest-junit"],
    coverageReporters: ["json", "lcov"],
  };
  