import checkboxesPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/checkboxesPage.js'
import loginPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/loginPage.js'
import passwordPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/passwordPage.js'
import users from '../support/users';
import dynamicLoadingPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/dynamicLoadingPage.js'
import hoversPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/hoversPage'
import sliderPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/sliderPage.js'
import dropdownPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/dropdownPage'
import elementsPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/elementsPage.js'

describe.skip('A/B Testing', () => {
  it('test', () => {
    cy.visit('/')
  })
})

describe('Add/Remove Elements', () => {
  it('Should add one or several elements', () => {
    elementsPage.goElementsPage();
    elementsPage.addElements(1);
    elementsPage.checkElementsCount(1);
    elementsPage.addElements(3);
    elementsPage.checkElementsCount(4);
  })
  it('Should remove one or several elements', () => {
    elementsPage.goElementsPage();
    elementsPage.addElements(1);
    elementsPage.checkElementsCount(1);
    elementsPage.removeCertainEl(1);
    elementsPage.checkElementsCount(0);
    elementsPage.addElements(10);
    elementsPage.checkElementsCount(10);
    elementsPage.removeElements(10);
    elementsPage.checkElementsCount(0);
    elementsPage.addElements(50);
    elementsPage.checkElementsCount(50);
    elementsPage.removeElements(50);
    elementsPage.checkElementsCount(0);
  })
})

describe.skip('Basic Auth',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Broken Images',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Challenging DOM',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe('Checkboxes',  () => {
  it('Should be all checkboxes are able to being checked and unchecked', () => {
    checkboxesPage.moveToTheCheckboxes();
    checkboxesPage.checkFirstbox();
    checkboxesPage.checkSecondbox();
    checkboxesPage.uncheckFirstbox();
    checkboxesPage.uncheckSecondbox();
  })
});

describe.skip('Context Menu',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Digest Authenticaton',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Dissapearing Elements',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Drag and Drop',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe('Dropdown',  () => {
  it('Should being able to select some options', () => {
    dropdownPage.goDropdownPage()
    dropdownPage.selectOption('1');
    dropdownPage.selectOption('2');
    dropdownPage.selectOption('1');
  })
});

describe.skip('Dynamic Content',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Dynamic Controls',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe('Dynamic Loading',  () => {

  it('Should obtain hidden element', () => {
    dynamicLoadingPage.goLoadingPage();
    dynamicLoadingPage.getHiddenElement();
    dynamicLoadingPage.verifyResult('be.visible')
  })
  it('Should obtain hidden element', () => {
    dynamicLoadingPage.goLoadingPage();
    dynamicLoadingPage.getRenderedElement();
    dynamicLoadingPage.verifyResult('exist')
  })
});

describe.skip('Entry Ad',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Exit Intent',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('File Download',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('File Upload',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Floating Menu',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Forgot Password',  () => {
  it('test', () => {
    passwordPage.goPasswordPage()
    passwordPage.submitEmail('therevors@gmail.com')
  })
});

describe('Form Authentication',  () => {
  it('Should be able to enter bad credentials', () => {
    loginPage.goLoginPage()
    loginPage.login(users.non_existing_user)
    loginPage.errorMessageShould('be.visible')
  })
  it('Should be able to enter valid credentials', () => {
    loginPage.goLoginPage()
    loginPage.login(users.valid_user)
    loginPage.verifyLoggedIn()
  });
  it('Should be able to log out', () => {
    loginPage.goLoginPage()
    loginPage.login(users.valid_user)
    loginPage.logout()
  })
  it('Should be able to clear input data and submit empty one', () => {
    loginPage.goLoginPage();
    loginPage.typeUsername('Login');
    loginPage.typePassword('Password')
    loginPage.clearUsername();
    loginPage.clearPassword();
    loginPage.submitForm()
    loginPage.errorMessageShould('be.visible')
  })
});

describe.skip('Frames',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Geolocation',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe('Horizontal Slider',  () => {
  it('Should change value in horizontal slider', () => {
    sliderPage.goSliderPage();
    sliderPage.setValue(5);
    sliderPage.setValue(3.8);
    sliderPage.setValue(0);
    sliderPage.setValue(2.3);
    sliderPage.setValue(30);
    sliderPage.setValue(-30);
  })
});

describe('Hovers',  () => {
  it('Should focus on profile block', () => {
    hoversPage.goHoversPage();
    hoversPage.focusProfile('user1')
    hoversPage.focusProfile('user2')
    hoversPage.focusProfile('user3')
  })
  it('Should view profile', () => {
    hoversPage.goHoversPage();
    hoversPage.viewProfile('1');
    cy.go('back');
    hoversPage.viewProfile('2');
    cy.go('back');
    hoversPage.viewProfile('3');
  });
});

describe.skip('Infinite Scroll',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Inputs',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('JQuery UI Menus',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('JavaScript Alerts',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('JavaScript onload event error',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Key Presses',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Large & Deep DOM',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Multiple Windows',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Nested Frames',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Notification Messages',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Redirect Link',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Secure File Download',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Shadow DOM',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Shifting Content',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Slow Resources',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Sortable Data Tables',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Status Codes',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Typos',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('WYSIWYG Editor',  () => {
  it('test', () => {
    cy.visit('/')
  })
});