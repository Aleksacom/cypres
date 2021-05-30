const locator = require("../../fixtures/locators.json")

describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get(locators.navigation.loginbutton).click()
    })

    it('negative case login / bad email', () => {
        cy.get(locators.loginpage.email).type('3@gmail.com')
        cy.get(locators.loginpage.psw).type('sifra123')
        cy.get(locators.loginpage.submitbtn).click()
    })

    it('negative case login / bad psw', () => {
        cy.get(locators.loginpage.email).type('andrija123@gmail.com')
        cy.get(locators.loginpage.psw).type('12345f')
        cy.get(locators.loginpage.submitbtn).click()
    })
    
    it('login with valid crds', () => {
        cy.get(locator.loginpage.email).type('andrija123@gmail.com')
        cy.get(locator.loginpage.psw).type('sifra123')
        cy.get(locator.loginpage.submitbtn).click()
    })



})