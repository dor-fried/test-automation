import { loginPage } from '../../pages/objectRepo'

describe('Demo web tests', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('should login to page', function () {

        loginPage.input.userName();
        loginPage.input.passwordInput();
    
        // inventoryPage.elements.titleSpan()
        // .should('have.text', 'Products');
    });
});