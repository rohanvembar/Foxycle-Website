// https://docs.cypress.io/api/introduction/api.html

describe("User Navbar", function() {
  before(function(){
    cy.viewport('macbook-15');
  })
  it("Click on navbar", function(){
    cy.visit("localhost:8080")
    cy.get('.navbar')
    cy.get('.navbar-menu')
  })
  it("Click on shop button", function(){
    cy.get('.navbar').contains('Shop').click()
    cy.url().should('include', '/shop')
  })
})
