
const locators = require("../../fixtures/locators.json")
//const cred = require("../../fixtures/cred.json");

describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get(locators.navigation.loginbutton).click()
        cy.url().should('include', '/login')
        cy.get(locators.loginpage.submitbtn).click()
        cy.get(locators.loginpage.badCred).should('be.visible')
        cy.get(locators.loginpage.badCred).should('have.text', 'Bad Credentials')
        cy.get(locators.loginpage.badCred).should('have.css', 'bacground-color', 'rgb')

        
    })

    it('login with valid crds', () => {
        cy.get(locators.loginpage.email).type('aleksacom@gmail.com')
        cy.get(locators.loginpage.psw).type('20061982')
        cy.get(locators.loginpage.submitbtn).click()

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
    
})