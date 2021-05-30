const locators = require("../../fixtures/locators.json")
const faker = require('faker');




describe('register', () => {
    it('register', () => {

        cy.visit('')
        cy.get(locators.navigation.registerBtn).click()
        cy.url().should('include', '/register')
        cy.get(locators.registerPage.firstName).should('have.id','first-name')
        cy.get(locators.registerPage.lastName).should('have.id','last-name')
        cy.get(locators.registerPage.email).should('have.id','email')
        cy.get(locators.registerPage.psw).should('have.id','password')
        cy.get(locators.registerPage.pswConfirm).should('have.id','password-confirmation')
        cy.get(locators.registerPage.aceptTerms).check()
        cy.get(locators.registerPage.submiBtn).should('contain.text', 'Submit')
        cy.get(locators.registerPage.firstName).type('Ivan')
        cy.get(locators.registerPage.lastName).type('Aleksic')
        cy.get(locators.registerPage.email).type('andrija1235@gmail.com')
        cy.get(locators.registerPage.psw).type('sifra1234')
        cy.get(locators.registerPage.pswConfirm).type('sifra1234')
        cy.get(locators.registerPage.aceptTerms).check()
        cy.get(locators.registerPage.submiBtn).click()

    })



  
    
})