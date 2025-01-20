# RESTful API Test Suite with Playwright

This repository contains automated tests for the RESTful API at [`https://api.restful-api.dev/`](https://api.restful-api.dev/). The tests cover CRUD operations and validate various aspects of the API's functionality.

## Repository

GitHub Repository: [RESTful API Testing](https://github.com/rahalgoon/restful-api-testing)

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Playwright** (installed via npm)

## Installation

Follow these steps to set up and run the tests:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahalgoon/restful-api-testing.git
   cd restful-api-testing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the tests:**
   ```bash
   npx playwright test
   ```

4. **View the test results:**
   The test results will be saved in the `test-results` directory. You can generate and view the test report using:
   ```bash
   npx playwright show-report
   ```

## Test Coverage

The test suite covers the following operations:

1. **Get all objects** - Fetches a list of all objects.
2. **Create an object** - Adds a new object using a POST request.
3. **Retrieve an object** - Gets a single object by ID.
4. **Update an object** - Updates an existing object using a PUT request.
5. **Delete an object** - Deletes an object using a DELETE request.

## Project Structure

The project follows this structure:

```
restful-api-testing/
├── tests/                # Contains test files
│   ├── api.spec.js        # Main test suite
├── playwright.config.js  # Playwright configuration
├── package.json          # Project dependencies
├── README.md             # Documentation
```

## Troubleshooting

- If you encounter permission issues, try running:
  ```bash
  sudo npx playwright test
  ```
- Ensure that the API is accessible and running correctly.


