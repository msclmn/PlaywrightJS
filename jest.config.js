// Used for the Test Reporter in GitHub Actions pipeline

module.exports = {
  reporters: [
    "default",
    ["jest-junit", { 
      outputDirectory: "./test-results",
      outputName: "junit.xml",
    }],
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov"],
};

  
