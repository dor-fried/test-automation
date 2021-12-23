import homeSoucePage from '../../pages/homeSaucePage'
import inventoryPage from '../../pages/inventoryPage'

describe('Demo web tests', () => {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com');
        cy.fixture('dataUsers').then(function (dataJson) {
            this.dataJson = dataJson
        });
    });

    it('should login to page', function () {

        homeSoucePage.typeUsername(this.dataJson.userNameValid);
        homeSoucePage.typePassword(this.dataJson.passwordValid);
        homeSoucePage.clickLogin();

        inventoryPage.elements.titleSpan()
            .should('have.text', 'Products');
    });

    it('should display locked out message', function () {

        homeSoucePage.typeUsername(this.dataJson.userNameLocked);
        homeSoucePage.typePassword(this.dataJson.passwordValid);
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('should display incorrect username message', function () {

        homeSoucePage.typeUsername(this.dataJson.incorrectUserName);
        homeSoucePage.typePassword(this.dataJson.passwordValid);
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should display incorrect password message', function () {

        homeSoucePage.typeUsername(this.dataJson.userNameValid);
        homeSoucePage.typePassword(this.dataJson.incorrectPassword);
        homeSoucePage.clickLogin();

        inventoryPage.elements.errorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});