const locators = require("../../fixtures/locators.json")
const faker = require('faker');
//const cred = require("../../fixtures/cred.json"); //tu pravim staticne kredencijale


let userData = {
    randomName : faker.name.findName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPasword : faker.internet.password()
}

describe('login spec', () => {
    before(() => {
        cy.visit('')
        cy.get(locators.navigation.loginbutton).click()
    })

    
    it('login with valid crds', () => {
        cy.get(locators.loginpage.email).type(userData.randomEmail) //iznad podesena varijabla
        cy.get(locators.loginpage.psw).type(faker.internet.password()) //type(faker.internet.password())
        cy.get(locators.loginpage.submitbtn).click()
    })
})

//cy.get(locator.loginpage.psw).type(faker.internet.password())