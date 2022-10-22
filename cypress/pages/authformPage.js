import homePage from "./homePage";

class authformPage {

    moveToTheCheckboxes() {
        cy.visit('/');
        homePage.moveTo('Form Authentification')
        // this.elements.title().should('be.visible');
    }
}

module.exports = new authformPage()