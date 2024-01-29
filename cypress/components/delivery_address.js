module.exports = {
  // Fields
  fields: {
    inputAddress: "label:contains('Endereço') + div > input[type='text']",
  },
  clickables: {
    buttonDelivery: "button[type='button'] > span > div > span",
    buttonConfirmAddress: "button[tabindex='0'][type='submit']",
  },

  // Functions
  fillInTheAddressField(value) {
    cy.get(this.clickables.buttonDelivery)
      .eq(0)
      .click()
    cy.get(this.fields.inputAddress)
      .type(value);
    cy.get("span").contains(value)
      .click();
    cy.get(this.clickables.buttonConfirmAddress)
      .click();
  },
};
