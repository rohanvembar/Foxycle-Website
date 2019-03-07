// https://docs.cypress.io/api/introduction/api.html

describe("User Navbar", function() {
  before(function(){
    cy.viewport('macbook-15');
  })
  it("Click on navbar", function(){
    cy.visit('/')
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
  it("Click on track button", function(){
    cy.get('.navbar').contains('track order').click()
    cy.url().should('include', '/ordertracking')
  })
})
