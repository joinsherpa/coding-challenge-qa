/// <reference types="cypress" />
describe('Test', () => {
    it('test', () => {
        cy.visit('/')
        // The following line will form exist in the DOM
        cy.get('form').should('exist')
        // Your code here
    })
})