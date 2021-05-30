const locator = require("../../fixtures/locators.json")
const faker = require('faker');


describe('register', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get(locator.registerPage.registerBtn).click()
    })

    it('register', () => {
        cy.get(locator.registerPage.firstName).type('Ivan')
        cy.get(locator.registerPage.lastName).type('Aleksic')
        cy.get(locator.registerPage.email).type('andrija1235@gmail.com')
        cy.get(locator.registerPage.psw).type('sifra1234')
        cy.get(locator.registerPage.pswConfirm).type('sifra1234')
        cy.get(locator.registerPage.aceptTerms).check()
        cy.get(locator.registerPage.submiBtn).click()
    })
})