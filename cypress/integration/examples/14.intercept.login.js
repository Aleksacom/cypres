const cred = require("../../fixtures/cred.json")
const locator = require("../../fixtures/locators.json");
import { authLogin} from '../../page_Object/loginPage.js'


describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        authLogin.clickLoginButton()
    
        
     })
    
    it('login with valid crds', () => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => { 
        })as('validLogin')
        authLogin.login('andrija123@gmail.com', 'sifra123')
    
    authLogin.login.
})

})

describe('login', () => {
    before(() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
            email: "andrija123@gmail.com",
            password: "sifra123"
        }).its('body').then((response) => {
            window.localStorage.setItem('token', response.access_token)
            cy.log(response.access_token)
        
    })//u commands se setuje token
    
it('visit gallery', () => {
    cy.visit('')
    cy.get(locator.navigation.loginbutton).should('not.exist')

    })

})

it.only('login with valid credentials', () => {
    cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
    }).as('validLogin')
    cy.get(locators.loginPage.email).type('andrija123@gmail.com')
    cy.get(locators.loginPage.password).type('sifra123')
    cy.get(locators.loginPage.submitBtn).click()
    cy.wait('@validLogin').then((intercept) => {
        // cy.log(JSON.stringify(intercept.response.statusCode))
        expect(intercept.response.statusCode).to.eql(200)
    })    

})

})
