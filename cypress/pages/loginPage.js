class loginPage {

    elements = {
        usernameInput: () => cy.get('#user_name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }
    typePassword(password) {
        this.elements.passwordInput().type(password);
    }
}

module.exports = new loginPage();
