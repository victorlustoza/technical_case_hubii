var initialQuantity;
var unitValueOfTheProduct;
var totalValue;

module.exports = {
  // Fields
  fields: {
    divBreadcrumbItems: "button + svg",
    titleProductPdp: "h1",
    titleProductDescription: "h6 + h2",
    imgOfTheProduct: "ul > li img:last",
    titleUnitValueOfTheProduct: "h5:contains('R$')",
    inputOfQuantity: "[type='number']",
    textWithTotalValue: "div > span:contains('R$')",
    divMessageProductAddedToCart: "div:contains('Produto adicionado ao carrinho!')"
  },
  clickables: {
    buttonViewMore: "h2 + button:contains('Ver mais')",
    buttonToSelectWeight: "button[type='button'] > p",
    buttonToIncreaseQuantity: "[type='number'] + button",
    buttonAddToCart: "button[tabindex='0'] span:contains('Adicionar')"
  },

  openPdpPage() {
    cy.visit("/produto/c6e1feb0-4ecc-4360-b471-19599bbb7a6c")
  },

  // Functions
  pressButtonSeeMoreDetails() {
    cy.get(this.clickables.buttonViewMore)
      .click();
  },
  selectFirstItemOfWeight() {
    cy.get(this.clickables.buttonToSelectWeight)
      .eq(0)
      .click()
  },
  pressButtonToIncreaseQuantity() {
    cy.get(this.clickables.buttonToIncreaseQuantity)
      .click()
  },
  pressButtonAddToCart() {
    cy.get(this.clickables.buttonAddToCart)
      .eq(0)
      .click()
  },

  // Validations Functions
  validateBreadcrumb() {
    cy.get(this.fields.divBreadcrumbItems)
      .eq(0)
      .parent("div")
      .should("be.visible");
  },
  validateTitleOfTheProduct(value) {
    cy.get(this.fields.titleProductPdp)
      .should("contain", value)
      .and("be.visible");
  },
  validateProductDescription() {
    cy.get(this.fields.titleProductDescription)
      .should("be.visible");
  },
  validateImgOfTheProduct() {
    cy.get(this.fields.imgOfTheProduct)
      .should("be.visible")
      .and("have.prop", "complete", true)
  },
  validateUnitValueOfTheProduct() {
    cy.get(this.fields.titleUnitValueOfTheProduct)
      .should("be.visible")
  },
  validateInitialQuantity() {
    cy.get(this.fields.inputOfQuantity)
      .invoke("val")
      .then((value) => {
        initialQuantity = parseFloat(value);
      })
  },
  validateQuantityAfterIncrease() {
    cy.get(this.fields.inputOfQuantity)
      .invoke("val")
      .then(() => {
        cy.get(this.fields.inputOfQuantity)
          .should("have.value", (initialQuantity + 1))
      })
  },
  validateTotalValue() {
    cy.get(this.fields.inputOfQuantity)
      .invoke("val")
      .then((value) => {
        initialQuantity = parseFloat(value);
      })
      .then(() => {
        cy.get(this.fields.titleUnitValueOfTheProduct)
          .invoke("text")
          .then((text) => {
            unitValueOfTheProduct = parseFloat(text.replace('R$ ', '').replace(',', '.').trim());
            totalValue = initialQuantity * unitValueOfTheProduct;
            totalValue = totalValue.toFixed(2).replace('.', ',')
          })
      })
      .then(() => {
        cy.get(this.fields.textWithTotalValue)
          .invoke("text")
          .should("eq", `R$ ${totalValue}`);
      })
  },
  validateButtonAddToCartEnabled() {
    cy.get(this.clickables.buttonAddToCart)
      .should('not.have.attr', 'disabled');
  },
  validateMessageProductAddedToCart() {
    cy.get(this.fields.divMessageProductAddedToCart)
      .should("be.visible")
  }
};
