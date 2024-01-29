module.exports = {
  // Fields
  fields: {
    titleDeliveryMethods: 'h6:contains("Métodos de Entrega")',
    labelShippingPrice: 'div[role="radio"] span',
    fieldThePurchaseSummary: 'p:contains("Resumo da Compra")',
    inputCreditCard: 'input[type="radio"]',
    fieldDeliveryInfo: 'textarea[name="delivery_info"]'
  },
  clickables: {
    buttonCompletePurchase: 'button[type="submit"]'
  },

  // Functions
  selectDeliveryMethod() {
    cy.get(this.fields.titleDeliveryMethods)
      .parents("div")
      .find("p:contains('Agendamento')")
      .click()
  },
  selectFormOfPaymentCreditCard() {
    cy.get(this.fields.inputCreditCard)
      .click()
  },
  fillDeliveryInfo() {
    cy.get(this.fields.fieldDeliveryInfo)
      .type("Preenchendo observações adicionais.")
  },

  // Validations Functions
  validateButtonCompletePurchase() {
    cy.get(this.clickables.buttonCompletePurchase)
      .should("be.visible")
  },
  validateShippingPrice() {
    cy.get(this.fields.labelShippingPrice)
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy.get(this.fields.fieldThePurchaseSummary)
          .parents("div")
          .find("p:contains('R$')")
          .eq(1)
          .invoke("text")
          .should("contain", text)
      })
  }
};
