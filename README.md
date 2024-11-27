# E2E tests for Playwright with JavaScript

### Overview

This repository features an automation portfolio that highlights UI and API tests for a web application, all implemented using Playwright with JavaScript.

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
