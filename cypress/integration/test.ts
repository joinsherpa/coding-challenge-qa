/// <reference types="cypress" />
describe('Test', () => {
    it('test', () => {
        // This is in TypeScript, feel free to leverage its capabilities too!
        cy.visit('/')
        // The form should exist in DOM
        cy.get('form').should('exist')

        // Your code here goes here 
        
        // End of your code
    })
})