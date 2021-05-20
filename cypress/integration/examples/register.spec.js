describe('register spec', () => {
    it('open register page', () => {
        cy.visit('')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('enter first name', () => {
        cy.get('input[id="first-name"]').type('Ivan')
    })
    it('enter password', () => {
        cy.get('input[id="last-name"]').type('Aleksic')
    })
    it('enter user name', () => {
        cy.get('input[id="email"]').type('acafaca252@gmail.com')
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
})
describe('logout', () => {
    it('click logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})
    describe('register spec', () => {
        it('open register page', () => {
            cy.visit('')
        })
        it('click register button', () => {
            cy.get('a[href="/register"]').click()
        })
        it('enter first name', () => {
            cy.get('input[id="first-name"]').type('Iva')
        })
        it('enter password', () => {
            cy.get('input[id="last-name"]').type('Aleksic')
        })
        it('enter user name', () => {
            cy.get('input[id="email"]').type('acafaca216gmail.com')
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


})
