class bookingPage {

    elements = {
        selectDate: () => cy.get('//*[contains(@class, "btn-card")]'),
        requireService: () => cy.get('//*[contains(@class, "jss824 jss827 jss853 jss838 jss854 jss839")]'),
        inputName: () => cy.get('//input[@name="user_name"]'),
        inputEmail: () => cy.get('//input[@name="email_address"]'),
        inputPhoneNumber: () => cy.get('//input[@name="primary_phone"]'),
    }
  
    typeName(usarname) {
        this.elements.inputName().type(usarname);
    }

    typeEmail(password) {
        this.elements.inputEmail().type(password);
    }

    typePhoneNumber(phonenumber) {
        this.elements.inputPhoneNumber().type(phonenumber);
    }

    clickLogin() {
        this.elements.loginBtn().click()
    }
}

module.exports = new bookingPage();