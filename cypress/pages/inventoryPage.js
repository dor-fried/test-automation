class inventoryPage {

    elements = {
        titleSpan: () => cy.get('.title'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(usarname) {
        this.elements.usarnameInput().type(usarname);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click()
    }
}

module.exports = new inventoryPage();