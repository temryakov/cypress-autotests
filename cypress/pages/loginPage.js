import homePage from "./homePage.js";

class loginPage {

    elements = {
        titleLoginPage: () => cy.get('h2').contains('Login Page'),
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        errorMessage: () => cy.contains('invalid'),
        submitButton: () => cy.get('[type="submit"]'),

        titleSecureArea: () => cy.get('h2').contains('Secure Area'),
        logoutButton: () => cy.get('.button')
        
    }

    goLoginPage() {
        cy.visit('/');
        homePage.moveTo('Form Authentication')
        this.elements.titleLoginPage().should('be.visible');
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clearUsername() {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().should('be.empty')
    }

    clearPassword() {
        this.elements.passwordInput().clear();
        this.elements.usernameInput().should('be.empty')
    }

    submitForm() {
        this.elements.submitButton().click();
    }

    submitCredentials(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.submitForm()
    }
    errorMessageShould(property) {
        this.elements.errorMessage().should(property)
    }
    verifyLoggedIn() {
        this.elements.titleSecureArea().should('be.visible');
    }
    login(users) {
        this.submitCredentials(users.login, users.password); 
    }
    logout() {
        this.elements.titleSecureArea().should('be.visible');
        this.elements.logoutButton().click();
        this.elements.titleLoginPage().should('be.visible');
    }
}

module.exports = new loginPage()