import homePage from "./homePage";

class sliderPage {

    elements = {
        title: () => cy.get('h3').contains('Horizontal Slider'),
        inputSlider: () => cy.get('input[type="range"]'),
        range: () => cy.get('#range')
    }

    goSliderPage() {
        cy.visit('/');
        homePage.moveTo('Horizontal Slider')
        this.elements.title().should('be.visible');
    }

    setValue(num) { 
        let inputValue = Math.round(num * 2) / 2, value;

        if (inputValue > 5) {
            value = 5 
        }
        else if (inputValue < 0) {
            value = 0
        }
        else {
            value = inputValue
        }

        this.elements.inputSlider()
            .invoke('val', value)
            .trigger('change')
        this.elements.range().should('contain', value)
    }
}

module.exports = new sliderPage()