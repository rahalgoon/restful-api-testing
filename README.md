# RESTful API Test Suite with Playwright

This repository contains automated tests for the RESTful API at `https://api.restful-api.dev/`. The tests cover CRUD operations and validate various aspects of the API's functionality.

## Prerequisites

Ensure you have the following installed:

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npx playwright test
   ```

4. View the test results:
   The test results will be saved in the `test-results` directory. You can view the results in the `test-reports` directory.
   ```bash
   npx playwright show-report
   ```

