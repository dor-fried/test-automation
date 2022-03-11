import loginPage from '../pages/loginPage'

describe('Demo web tests', () => {

    it('should login to page', function () {

        loginPage.typeUsername(this.dataJson.userNameValid);
        loginPage.typePassword(this.dataJson.passwordValid);
        loginPage.clickLogin();

        cy.title().should('eq', 'Swag Labs')
        inventoryPage.elements.titleSpan()
            .should('have.text', 'Products');
    });
});