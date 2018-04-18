* navigate to build
* npm install
* npm run coverage


*Scenarios*

1. When, in package.json, collectCoverageFrom is not specified, coverage is not collected, even tho tests ran correctly
2. When adding collectCoverageFrom, coverage runs, but coverage data is incorrect.
3. Running the test on a global / imported module does not change the outcome