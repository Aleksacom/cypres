describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click()
    })

    it('negative case login / bad email', () => {
        cy.get('input[id="email"]').type('3@gmail.com')
        cy.get('input[id="password"]').type('sifra123')
        cy.get('button[type="submit"]').click()
    })

    it('negative case login / bad psw', () => {
        cy.get('input[id="email"]').type('andrija123@gmail.com')
        cy.get('input[id="password"]').type('12345f')
        cy.get('button[type="submit"]').click()
    })
    
    it('login with valid crds', () => {
        cy.get('input[id="email"]').type('andrija123@gmail.com')
        cy.get('input[id="password"]').type('sifra123')
        cy.get('button[type="submit"]').click()
    })
})