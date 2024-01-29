module.exports = {
  // Fields
  fields: {
    titleResults: "h4",
    textProductAddedToCart: "Produto adicionado ao carrinho!",
    divProductAddedToCart: "div",
    titleNoResults: "h6:contains('Sem Resultados')",
    textNoProductForSearch: "p:contains('Não há nenhum produto para a busca')"
  },
  clickables: {
    imgOfTheFirstItemOfTheList: "div > img",
  },

  // Validations Functions
  validateTheResultsOfTheSearch(value) {
    cy.get(this.fields.titleResults)
      .contains("Resultados")
      .should("be.visible");
    cy.get(`[title~="${value}"]`)
      .should("be.visible");
  },
  validateMessageProductAddedToCart() {
    cy.get(this.fields.divProductAddedToCart)
      .contains(this.fields.textProductAddedToCart)
      .and("should", "be.visible");
  },
  validateMessagesForNoResults() {
    cy.get(this.fields.titleNoResults)
      .should("be.visible")
    cy.get(this.fields.textNoProductForSearch)
      .should("be.visible")
  }
};
