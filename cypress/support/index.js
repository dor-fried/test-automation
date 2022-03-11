import './commands'

beforeEach(function () {
    cy.visit('https://www.saucedemo.com');
    cy.fixture('dataUsers').then(function (dataJson) {
        this.dataJson = dataJson
    });
});