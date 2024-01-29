module.exports = {
  // Fields
  fields: {
    titleProductCart: "button:contains('Remover')"
  },
  clickables: {
    buttonNext: "span:contains('Próximo')"
  },

  // Functions
  pressButtonNext() {
    cy.get(this.clickables.buttonNext)
      .eq(0)
      .click()
  },

  // Validations Functions
  validateTitleOfTheProductInTheCart(value) {
    cy.get(this.fields.titleProductCart)
      .prev()
      .invoke("text")
      .should("eq", value)
  }
}