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
  it("Click on home button", function(){
    cy.get('.navbar').contains('home').click()
    cy.url().should('include', '/')
  })
  it("Click on service button", function(){
    cy.get('.navbar').contains('services').click()
    cy.url().should('include', '/services')
  })
  it("Click on contact button", function(){
    cy.get('.navbar').contains('contact').click()
    cy.url().should('include', '/contact')
  })
})
