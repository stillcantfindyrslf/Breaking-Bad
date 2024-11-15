describe('Breaking Bad Catalog', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/characters');
    });

    it('should display a cards of characters on page', () => {
        cy.get('[class*="Card_card"]').should('have.length', 5);

        cy.get('[class*="Card_card"]').first().within(() => {
            cy.contains('Walter White');
            cy.contains('Deceased');
        });
    });

    it('should allow searching for a character', () => {
        cy.get('input[type="text"]').type('Jesse Pinkman');

        cy.get('[class*="Card_card"]').should('have.length', 1);

        cy.contains('Jesse Pinkman');
    });

    it('should show "No matches found" if search yields no results', () => {
        cy.get('input[type="text"]').type('Gustavo Fring');

        cy.contains('No matches found').should('be.visible');
    });

    it('should display character details when clicking on a character', () => {
        cy.get('[class*="Card_card"]').first().click();

        cy.url().should('include', '/characters/');

        cy.contains('Back to Catalog');
        cy.contains('Walter White');
        cy.contains('Deceased');
        cy.contains('09.07.1958');
    });

    it('should toggle to list view and back to cards view', () => {
        cy.get('[class*="slider"]').click();

        cy.get('[class*="ListView"]').should('exist');
        cy.get('[class*="Card_card"]').should('not.exist');

        cy.get('[class*="slider"]').click();
        cy.get('[class*="Card_card"]').should('exist');
        cy.get('[class*="ListView"]').should('not.exist');
    });
});