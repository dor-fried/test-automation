import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'

describe('Login Tests', () => {

    it('should login to page', function () {

        loginPage.typeUsername(this.dataJson.userNameValid);
        loginPage.typePassword(this.dataJson.passwordValid);
        loginPage.clickLogin();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/inventory.html')
        });
        cy.title().should('eq', 'Swag Labs')
        inventoryPage.elements.titleSpan()
            .should('have.text', 'Products');
    });

    it('should display locked out message', function () {

        loginPage.typeUsername(this.dataJson.userNameLocked);
        loginPage.typePassword(this.dataJson.passwordValid);
        loginPage.clickLogin();
        loginPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('should display incorrect username message', function () {

        loginPage.typeUsername(this.dataJson.incorrectUserName);
        loginPage.typePassword(this.dataJson.passwordValid);
        loginPage.clickLogin();
        loginPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should display incorrect password message', function () {

        loginPage.typeUsername(this.dataJson.userNameValid);
        loginPage.typePassword(this.dataJson.incorrectPassword);
        loginPage.clickLogin();
        loginPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});