
import homePage from "./homePage.js";

class floatingPage {

    elements = {
        title: () => cy.get('h3').contains('Floating Menu'),
        menuButton: (name) => cy.get(`a[href*="#${name}"]`),
    }

    goFloatingPage() {
        cy.visit('/');
        homePage.moveTo('Floating Menu')
        this.elements.title().should('be.visible');
    }
    pressButton(name) {
        this.elements.menuButton(name).click()
        cy.url().should('eq', Cypress.config().baseUrl + `floating_menu#${name}`) 
    }
}

module.exports = new floatingPage()