describe("Amazon Tests", () => {
  beforeEach(() => {
    const url = "https://www.amazon.com/";
    cy.visit(url);
  });

  it("should search for a samsung tv", () => {
    cy.get("#twotabsearchtextbox").type("samsung tv");
    cy.get("#nav-search-submit-button").click();
    cy.get(".s-result-list").should("be.visible");
  });

  it("should add an item to cart", () => {
    cy.get("#twotabsearchtextbox").type("smartphone");
    cy.get("#nav-search-submit-button").click();
    cy.get('[data-component-type="s-search-result"]')
      .first()
      .find(".a-link-normal.a-text-normal")
      .first()
      .click();

    cy.get("[data-asin]")
      .invoke("attr", "data-asin")
      .then((dataAsin) => {
        const asin = dataAsin.trim();

        cy.get("#add-to-cart-button").first().click();
        cy.get("#nav-cart").click();

        // Verify that the data-asin attribute matches the added product in the cart
        cy.get("[data-asin]").invoke("attr", "data-asin").should("eq", asin);
      });
  });
});
