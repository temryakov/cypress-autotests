
import homePage from "./homePage.js";

class dynamicLoadingPage {

    elements = { 
        title: () => cy.get('h3').contains('Dynamically Loaded Page Elements'),
        hiddenElementLink: () => cy.get('[href="/dynamic_loading/1"]'),
        renderedElementLink: () => cy.get('[href="/dynamic_loading/2"]'),
        startButton: () => cy.get('button'),
        loadingProcess: () => cy.get('#loading'),
        result: () => cy.get('#finish > h4', { timeout: 10000 }),
    }

    goLoadingPage() {
        cy.visit('/');
        homePage.moveTo('Dynamic Loading')
        this.elements.title().should('be.visible');
    }
    pressStart() {
        this.elements.startButton().click();
    }
    verifyResult(property) {
        this.elements.result().should(property);
    }
    getHiddenElement() {
        this.elements.hiddenElementLink().click();
        this.pressStart()
    }
    getRenderedElement() {
        this.elements.renderedElementLink().click();
        this.pressStart()
    }

}

module.exports = new dynamicLoadingPage()