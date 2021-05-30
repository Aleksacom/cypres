import { authLogin} from '../../page_Object/loginPage.js'
import { createGallery} from '../../page_Object/createGallery'
const cred = require("../../fixtures/cred.json");

describe('login spec', () => {
    it('login', () => {
        cy.visit('')
        authLogin.clickLoginButton()
     })
 it('login with valid crds', () => {
        authLogin.login(cred.creds.email, cred.creds.password)
    })

})

describe('create gallery', () => {
    
    it('create', () => {
        createGallery.clickcreateButton()

})

it('create gallery', () => {
    createGallery.create('Test title', 'Opis', 'https://www.aperfectworld.org/clipart/animals/chicken13.png')
   })
})

describe('create gallery empty title', () => {
    
    it('emptyTitle', () => {
        createGallery.clickcreateButton()

})

it('createGallery', () => {
    createGallery.create('', 'Opis', 'https://www.aperfectworld.org/clipart/animals/chicken13.png')
   })
  }) 