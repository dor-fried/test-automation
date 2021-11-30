import homeSoucePage from '../../pages/homeSaucePage'
import inventoryPage from '../../pages/inventoryPage'

describe('Demo web tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    });

    it('should login to page', function () {

        homeSoucePage.typeUsername('standard_user');
        homeSoucePage.typePassword('secret_sauce');
        homeSoucePage.clickLogin();

        inventoryPage.elements.titleSpan()
            .should('have.text', 'Products');
    });

    it('should display locked out message', function () {

        homeSoucePage.typeUsername('locked_out_user');
        homeSoucePage.typePassword('secret_sauce');
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('should display incorrect username message', function () {

        homeSoucePage.typeUsername('dor123');
        homeSoucePage.typePassword('secret_sauce');
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should display incorrect password message', function () {

        homeSoucePage.typeUsername('locked_out_user');
        homeSoucePage.typePassword('gsgsd');
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});