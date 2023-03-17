describe('Some Test', () => {
    it('correctly states that the btn is enabled', () => {
      cy.visit("localhost:5173")
      cy.get("h1").should("exist")
      cy.get("button").should("not.be.enabled")
      cy.get("#hat").type("cat, hat, jazz")
      cy.get("#cat").type("cat, hat, jazz")
      
      cy.get("button").should("be.enabled")
    })
  })