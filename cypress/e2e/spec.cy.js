import loginPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/loginPage.js'
import passwordPage from '/Users/admin/repositories/cypress-autotests/cypress/pages/passwordPage.js'

describe.skip('A/B Testing', () => {
  it('test', () => {
    cy.visit('/')
  })
})

describe.skip('Add/Remove Elements', () => {
  it('test', () => {
    cy.visit('/')
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

describe.skip('Checkboxes',  () => {
  it('test', () => {
    cy.visit('/')
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

describe.skip('Dropdown',  () => {
  it('test', () => {
    cy.visit('/')
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

describe.skip('Dynamic Loading',  () => {
  it('test', () => {
    cy.visit('/')
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

describe.skip('Form Authentication',  () => {
  it('Should be able to enter bad credentials', () => {
    loginPage.goLoginPage()
    loginPage.submitCredentials('Bad', 'Credentials');
    loginPage.errorMessageShould('be.visible')
  })
  it('Should be able to enter valid credentials', () => {
    loginPage.goLoginPage()
    loginPage.login()
  });
  it('Should be able to log out', () => {
    loginPage.goLoginPage()
    loginPage.login()
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

describe.skip('Horizontal Slider',  () => {
  it('test', () => {
    cy.visit('/')
  })
});

describe.skip('Hovers',  () => {
  it('test', () => {
    cy.visit('/')
  })
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