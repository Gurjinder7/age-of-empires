describe('Cypress', () => {
    it('should visit homepage', () => {
        cy.visit('/');
        expect(true).to.equal(true)
    })
})