import homePage from "./homePage.js";

class hoversPage {

    elements = {
        title: () => cy.get('h3').contains('Hovers'),
        profileName: (username) => cy.get('h5').contains(`name: ${username}`),
        profileLink: (username) => cy.contains(`name: ${username}`).parents('.figure').find('a').contains('View profile'),
        profileImage: (username) => cy.get('h5').contains(`name: ${username}`).parents('.figure').find('img')

    }
    goHoversPage() {
        cy.visit('/');
        homePage.moveTo('Hovers')
        this.elements.title().should('be.visible');
    }
    focusProfile(name) {
        this.elements.profileImage(name).realHover('mouse')
        this.elements.profileName(name).should('be.visible')
        this.elements.profileImage(name).realHover('mouse')
        this.elements.profileLink(name).should('be.visible')
        cy.wait(1000);
    }
    viewProfile(id) {
        this.focusProfile(`user${id}`)
        this.elements.profileLink(`user${id}`).click();
        cy.url().should('eq', Cypress.config().baseUrl + `users/${id}`)
    }
}

module.exports = new hoversPage()