# E2E tests for Playwright with JavaScript

### Overview

This repository features an automation portfolio that highlights UI and API tests for a web application, all implemented using Playwright with JavaScript.

Tests are triggered automatically in GitHub Actions CI/CD whenever a PUSH to main occurs.

There are currently 2 pipelines: 
1) UI Tests
2) API Tests

### Install Dependencies based on the `package.json` file: 

```
npm i
```

### How to run the tests: 

By Test name:
```
npx playwright test TestNavMenuButtons.spec.js
```

Runs all tests:
```
npx playwright test
```

Run all tests in Headed mode:
```
npx playwright test --headed
```

Debug mode:
```
npx playwright test TestNavMenuButtons.spec.js --debug
```

Launch the Playwright Test Runner in UI mode:
```
npx playwright test --ui
```

### CI/CD Pipeline Execution:
- API and UI tests are triggered automatically in GitHub Actions CI/CD whenever a PUSH to main occurs.

To trigger a manual pipeline run:
```
- Click Actions tab from the project
- Select Worflow (UI or API Tests)
- Click Run workflow
- Select Branch to run in
- Select Run workflow
```
