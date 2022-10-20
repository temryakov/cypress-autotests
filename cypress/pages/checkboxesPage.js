class checkboxesPage {

    elements = {
        title: () => cy.get('h3').contains('Checkboxes'),
        checkbox1 : () => cy.get('[type="checkbox"]').eq(0),
        checkbox2 : () => cy.get('[type="checkbox"]').eq(1)
    }
    moveToTheCheckboxes() {
        cy.visit('/');
        cy.get('a').contains('Checkboxes').click() // should move to the mainPage
        this.elements.title().should('be.visible');
    }

    checkFirstbox() {
        this.elements.checkbox1().check().should('be.checked');
    } 
    checkSecondbox() {
        this.elements.checkbox2().check().should('be.checked');
    }
    uncheckFirstbox() {
        this.elements.checkbox1().uncheck().should('not.be.checked');
    }
    uncheckSecondbox() {
        this.elements.checkbox2().uncheck().should('not.be.checked')
    }
}

module.exports = new checkboxesPage()