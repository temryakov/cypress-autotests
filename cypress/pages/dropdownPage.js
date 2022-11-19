import homePage from "./homePage.js";

class dropdownPage {
    
    elements = {
        title: () => cy.get('h3').contains('Dropdown'),
        dropdownList: () => cy.get('#dropdown')
    }

    goDropdownPage() {
        cy.visit('/');
        homePage.moveTo('Dropdown')
        this.elements.title().should('be.visible');
    }
    selectOption(number) {
        this.elements.dropdownList().select(`Option ${number}`)
        this.elements.dropdownList().should('have.value', number)
    }
}

module.exports = new dropdownPage()