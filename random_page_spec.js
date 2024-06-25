describe("Visit a Random Page", () => {
  it("should load the page successfully", () => {
    // Replace this URL with any URL you want to test
    const url = "https://www.booking.com";

    cy.visit(url);

    // Add assertions as needed
    cy.get("body").should("be.visible"); // Check if the body element is visible
  });
});
