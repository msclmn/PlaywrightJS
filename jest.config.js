// Used for the Test Reporter in GitHub Actions pipeline

module.exports = {
  testResultsProcessor: "jest-junit",
  reporters: ["default", "jest-junit"],
  testResultsProcessor: "jest-junit",
    
  outputDirectory: "./test-results", 
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov"],
};

  
