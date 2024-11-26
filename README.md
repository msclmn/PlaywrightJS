# E2E tests for Playwright with JavaScript

### Install Dependencies based on the `package.json` file: 

```
npm i
```

### How to run the tests: 

```
npx playwright test and name of test, example npx playwright test TestNavMenuButtons.spec.js
```
npx playwright test (Runs test without providing the actual path)

npx playwright test --headed (Runs in headed mode)

npx playwright test --debug so for example npx playwright test TestNavMenuButtons.spec.js --debug

npx playwright test --ui