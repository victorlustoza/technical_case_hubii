import { qase } from 'cypress-qase-reporter/dist/mocha';

describe("Testes de Funcionalidade", () => {

  qase(1,
    it("Validar se o usuário consegue pesquisar produtos com termos válidos", () => {
      Cypress.home_page.openHomePage();
      Cypress.header.fillInTheSearchField(
        Cypress.search.searchWord[1].keywordToSearch,
      );
      Cypress.plp_page.validateTheResultsOfTheSearch(
        Cypress.search.searchWord[1].keywordToSearch,
      );
    })
  )

  qase(11,
    it("Validar se o usuário consegue pesquisar produtos com termos inválidos - (Caso Negativo)", () => {
      Cypress.home_page.openHomePage();
      Cypress.header.fillInTheSearchField(
        Cypress.search.searchWord[2].keywordToSearch,
      );
      Cypress.plp_page.validateMessagesForNoResults();
    })
  )

  qase(2,
    it("Validar se o usuário consegue visualizar informações importantes dos produtos", () => {
      Cypress.pdp_page.openPdpPage();
      Cypress.pdp_page.validateBreadcrumb();
      Cypress.pdp_page.validateTitleOfTheProduct(
        Cypress.products.titleProducts[1].racaoWhiskasCarne
      );
      Cypress.pdp_page.pressButtonSeeMoreDetails();
      Cypress.pdp_page.validateProductDescription();
      Cypress.pdp_page.validateImgOfTheProduct();
      Cypress.pdp_page.selectFirstItemOfWeight();
      Cypress.pdp_page.validateUnitValueOfTheProduct();
    })
  )

  qase(3,
    it("Validar se o usuário consegue adicionar produto ao carrinho e preencher dados para checkout(Sem concluir compra real)", () => {
      cy.login();
      Cypress.header.validateVisibleInputSearch();
      Cypress.pdp_page.openPdpPage();
      Cypress.pdp_page.selectFirstItemOfWeight();
      Cypress.pdp_page.validateButtonAddToCartEnabled();
      Cypress.pdp_page.validateInitialQuantity();
      Cypress.pdp_page.pressButtonToIncreaseQuantity();
      Cypress.pdp_page.validateQuantityAfterIncrease();
      Cypress.pdp_page.validateTotalValue();
      Cypress.pdp_page.pressButtonAddToCart();
      Cypress.pdp_page.validateMessageProductAddedToCart();
      Cypress.delivery_address.fillInTheAddressField(
        Cypress.addresses.sampleAddresses[1].addressOfCuritiba,
      );
      Cypress.header.pressButtonGoToCart();
      Cypress.cart.validateTitleOfTheProductInTheCart(
        Cypress.products.titleProducts[1].racaoWhiskasCarne
      );
      Cypress.cart.pressButtonNext();
      Cypress.checkout_page.validateButtonCompletePurchase();
      Cypress.checkout_page.selectDeliveryMethod();
      Cypress.checkout_page.validateShippingPrice();
      Cypress.checkout_page.selectFormOfPaymentCreditCard();
      Cypress.checkout_page.fillDeliveryInfo();
    })
  )

  qase(8,
    it("Validar se o usuário consegue realizar login em uma conta existente", () => {
      cy.login();
    })
  )

  qase(12,
    it("Validar se o usuário consegue realizar login com dados inválidos - (Caso Negativo)", () => {
      cy.invalid_login();
    })
  )
})