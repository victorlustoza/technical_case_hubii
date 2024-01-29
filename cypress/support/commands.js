Cypress.Commands.add('login', () => {
  cy.visit('/entrar')
  cy.get('input[name="email"]')
    .type('mobowi3625@trackden.com')
  cy.get('input[name="password"]')
    .type('@Teste2305')
  cy.get('button[type="submit"]')
    .click()
  cy.get('button > span:contains("Minha conta")')
    .should('be.visible')
})

Cypress.Commands.add('invalid_login', () => {
  cy.visit('/entrar')
  cy.get('input[name="email"]')
    .type('mobowi3625@trackden.com')
  cy.get('input[name="password"]')
    .type('123456')
  cy.get('button[type="submit"]')
    .click()
  cy.get('p:contains("Senha incorreta!")')
    .should('be.visible')
})