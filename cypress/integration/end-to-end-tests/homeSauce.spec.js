import homeSoucePage from '../../pages/homeSaucePage'
import inventoryPage from '../../pages/inventoryPage'

describe('Demo web tests', () => {

    it('should login to page', function () {

        homeSoucePage.typeUsername('standard_user');
        homeSoucePage.typePassword('secret_sauce');
        homeSoucePage.clickLogin();

        inventoryPage.elements.titleSpan()
            .should('have.text', 'Products');
    });
});