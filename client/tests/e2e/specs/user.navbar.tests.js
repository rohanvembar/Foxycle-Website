// https://docs.cypress.io/api/introduction/api.html

describe("User Navbar", function() {
  before(function(){
    cy.viewport('macbook-15');
  })
  it("Click on navbar", function(){
    cy.visit("http://10.0.75.1:8080")
    cy.get('.navbar')
    cy.get('.navbar-menu')
  })
  it("Click on shop button", function(){
    cy.get('.navbar').contains('shop').click()
    cy.url().should('include', '/shop')
  })
})
