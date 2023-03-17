describe('Some Test', () => {
    it('fails when trying to get the btn state!', () => {
      cy.visit("localhost:5173")
      cy.get("h1").should("exist")
      cy.get("button").should("not.be.enabled")
      cy.get("input").type("cat, hat, jazz")
      cy.get("button").should("be.enabled")
    })
  })