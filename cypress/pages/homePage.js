class homePage {

    moveTo(page) {
        cy.get('a').contains(page).click()
    }
}

module.exports = new homePage()