const locator = require("../../fixtures/locators.json")
const faker = require('faker');

describe('create gallery tests', () => {
    before(() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
            email: "andrija123@gmail.com",
            password: "sifra123"
        }).its('body').then((response) => {
            window.localStorage.setItem('token', response.access_token)
            cy.log(response.access_token)
        })
    })//u commands se setuje token
    
it('visit gallery', () => {
    cy.visit('')
    cy.get(locator.navigation.loginbutton).should('not.exist')

    })

})
