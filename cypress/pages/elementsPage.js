import homePage from "./homePage.js";

class elementsPage {

    elements = { 
        title: () => cy.get('h3').contains('Add/Remove Elements'),
        addButton: () => cy.get('button').contains('Add Element'),
        removeButton: (number) => cy.get('.added-manually')
    }
    goElementsPage() {
        cy.visit('/');
        homePage.moveTo('Add/Remove Elements')
        this.elements.title().should('be.visible');
    }
    addElements(number) {
        for (let n = 0; n < number; n ++) {
            this.elements.addButton().click()
        }
        this.elements.removeButton().should('have.length.at.least', number)
    }
    checkElementsCount(count) {
        this.elements.removeButton().should('have.length', count)
    }
    removeElements(number) {
        for (let n = 0; n < number; n ++) {
            this.elements.removeButton().eq(0).click()
        }
    }
    removeCertainEl(count) {
        this.elements.removeButton().eq(count - 1).click()
    }
}
module.exports = new elementsPage()

