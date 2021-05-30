import { authLogin} from '../../page_Object/loginPage.js'


describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        authLogin.clickLoginButton()
     })
    
    it('login with valid crds', () => {
        authLogin.login('andrija123@gmail.com', 'sifra123')
    })
})