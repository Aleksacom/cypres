const locator = require("../../fixtures/locators.json")
const faker = require('faker');

describe('create gallery tests', () => {
    before(() => {
       cy.loginTroughBackend() //('aleksacom@gmail.com', '20061982') ovo smo ibacili iz zagrade
        })
   //ovo sam prethodno setovao u commands 
it('visit gallery', () => {
    cy.visit('')
    cy.get(locator.navigation.loginbutton).should('not.exist')

    })

})
