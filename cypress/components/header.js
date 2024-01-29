module.exports = {
  // Fields
  fields: {
    inputSearch: 'input[type="search"]',
  },
  clickables: {
    buttonGoToCart: 'button[type="button"] > span svg'
  },

  // Functions
  pressButtonGoToCart() {
    cy.get(this.clickables.buttonGoToCart)
      .eq(1)
      .click()
  },
  fillInTheSearchField(value) {
    cy.get(this.fields.inputSearch)
      .type(`${value}{enter}`);
  },

  // Validations Functions
  validateVisibleInputSearch() {
    cy.get(this.fields.inputSearch)
      .should('be.visible')
  }
};
