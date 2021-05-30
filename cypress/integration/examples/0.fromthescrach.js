const locators = require("../../fixtures/locators.json")
import { createGallery} from '../../page_Object/createGallery'
const faker = require('faker');

describe("Login test", () => {  //describe blok sadrzi vise testova
    
    it('Visit gallery page', () => {  //it sadrzi jedan test
        cy.visit('https://gallery-app.vivifyideas.com/')  // visit() -> posecujemo neki URL
        //cy.get(locators.navigation.loginbutton).click()
        //cy.url().should('include', '/login')
       // cy.get(locators.loginpage.submitbtn).click()
        //cy.get(locators.loginpage.badCred).should('be.visible')
        //cy.get(locators.loginpage.badCred).should('have.text', 'Bad Credentials')
        //cy.get(locators.loginpage.badCred).should('have.css', 'bacground-color', 'rgb')
        
    })
 
    //it blok -> jedan test
   it('Click on login button', () => {
    cy.visit('https://gallery-app.vivifyideas.com/') //posecujemo stranicu
    cy.get('.nav-link').eq(1).click() // dohvatamo preko klase sve elemente, selektujemo drugi i klikcemo
    // cy.get("a[href='/login']").click() // ovo je jos jedan nacin na koji mozemo dohvatiti
    cy.get('#email').type('aleksacom@gmail.com') //dohvatamo email polje pomocu ID
    cy.get('#password').type('20061982')  // upisujemo string pomocu type
    cy.get('button').click() //dohvatamo button pomocu taga (ima samo jedno zato smemo u svrhu primera )
   
})

    it('Click on logout button', () => {
    cy.get('.ml-auto > :nth-child(3) > .nav-link').click() 

                                         
 })

  describe('Register', () => {
        it('open register page', () => {
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
           
        })
        it('enter first name', () => {
            cy.get(locators.registerPage.firstName).type('Ivan')
        })
        it('enter password', () => {
            cy.get('input[id="last-name"]').type('Aleksic')
        })
        it('enter user name', () => {
            cy.get('input[id="email"]').type(faker.internet.email())
        })
        it('enter password', () => {
            cy.get('input[id="password"]').type('aca12345')
        })
        it('enter confirmed pasword', () => {
            cy.get('input[id="password-confirmation"]').type('aca12345')
        })
        it('acept terms', () => {
            cy.get('input[type="checkbox"]').check()
        })
            it('click submit', () => {
            cy.get('button[type="submit"]').click()
        }) 

        describe('create gallery', () => {
        it('create', () => {
        createGallery.clickcreateButton()
        })

        it('create gallery', () => {
        createGallery.create('Test title', 'Opis', 'https://www.aperfectworld.org/clipart/animals/chicken13.png')
        })
})

})
})
 