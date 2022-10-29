class homePage {

    moveTo(page) {
        cy.visit('/');
        cy.get('a').contains(page).click()
    }
}

module.exports = new homePage()