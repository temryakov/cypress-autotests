import homePage from "./homePage.js";

class passwordPage {
    
    elements = {
        title: () => cy.get('h2').contains('Forgot Password'),
        emailInput: () => cy.get('input[name="email"]', {force: true}),
        button: () => cy.get('#form_submit')
    } 

    goPasswordPage() {
        cy.visit('/');
        homePage.moveTo('Forgot Password')
        this.elements.title().should('be.visible');
    }

    submitEmail(email) {
        this.elements.emailInput().type(email);
        this.elements.button().click()
    }
}

module.exports = new passwordPage()