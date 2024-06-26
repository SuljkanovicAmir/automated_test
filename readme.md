# Amazon Cypress Tests Report

This repository contains automated tests for Amazon using Cypress. Below is a report of the tests conducted.

## Test Summary

### Test 1: Search for a Product

- **Description:** Verifies the search functionality by searching for a book and ensuring results are displayed.
- **Steps:**
  1. Navigate to the Amazon homepage.
  2. Enter "samsung tv" into the search box.
  3. Click the search submit button.
  4. Verify that the search results list is visible.
- **Result:** Passed

### Test 2: Add an Item to Cart

- **Description:** Validates the ability to add a smartphone to the cart and verify it appears correctly in the cart.
- **Steps:**
  1. Navigate to the Amazon homepage.
  2. Enter "smartphone" into the search box.
  3. Click the search submit button.
  4. Click on the first search result.
  5. Click on the link to view the product details.
  6. Extract the product identifier (`data-asin`).
  7. Click the "Add to Cart" button.
  8. Click on the cart icon to navigate to the cart page.
  9. Verify that the product with the extracted `data-asin` appears in the cart.
- **Result:** Passed

## Mochawesome Test Report

I have generated a test report using Mochawesome. The report can be found in the `mochawesome-report` folder.

### Viewing the Report

To view the Mochawesome report:

1. Navigate to the `mochawesome-report` folder in this repository.
2. Open the HTML file (typically named `mochawesome.html`) in a web browser to view the detailed test results.

### Summary

The report provides comprehensive details about the test execution, including:

- Test case results (passed, failed, skipped)
- Execution timeline and duration
- Environment details
