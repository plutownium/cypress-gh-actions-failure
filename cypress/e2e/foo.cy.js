describe('Some Test', () => {
    it('correctly states that the btn is enabled', () => {
      cy.visit("localhost:5173")
      cy.get("h1").should("exist")
      cy.get("button").should("not.be.enabled")
      cy.get("input").type("cat, hat, jazz")
      // cy.wait(500)
      cy.get("button").should("be.enabled")
    })
  })