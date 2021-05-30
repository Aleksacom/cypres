/// <reference types="Cypress" />

const locators = require("../../fixtures/locators.json")
const faker = require('faker');

describe('create gallery tests', () => {
    it('login with valid credentials', () => {
        cy.visit('')
        cy.get(locators.navigation.loginbutton).click()
        cy.url().should('include', '/login') 
        cy.get(locators.loginpage.title).should('have.text', 'Please login')
    })

    it('login with valid credentials', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        cy.get(locators.loginpage.email).type('aleksacom@gmail.com')
        cy.get(locators.loginpage.psw).type('20061982')
        cy.get(locators.loginpage.submitbtn).click()
        cy.wait('@validLogin').then((intercept) => {
            // cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it('delete', () => {
        cy.wait(2000)
        cy.get('a[href="/my-galleries"]').click()
        cy.wait(2000)
        cy.get('a[href="/galleries/2007"]').click()
        cy.get('button[class="btn btn-custom"]').eq(0).click()

    })
})