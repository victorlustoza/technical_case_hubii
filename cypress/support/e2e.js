// Import commands.js using ES2015 syntax:
import "./commands";

// Import Components
import header from "../components/header.js";
import delivery_address from "../components/delivery_address.js";
import cart from "../components/cart.js";

// Import Fixtures
import search from "../fixtures/search.json";
import addresses from "../fixtures/addresses.json";
import products from "../fixtures/products.json";

// Importando as Page Objects
import home_page from "../pages/home_page.js";
import pdp_page from "../pages/pdp_page.js";
import plp_page from "../pages/plp_page.js";
import checkout_page from "../pages/checkout_page.js";

// Disponibilizando os objetos cypress globalmente
Cypress.header = header;
Cypress.delivery_address = delivery_address;
Cypress.cart = cart;
Cypress.search = search;
Cypress.addresses = addresses;
Cypress.products = products;
Cypress.home_page = home_page;
Cypress.pdp_page = pdp_page;
Cypress.plp_page = plp_page;
Cypress.checkout_page = checkout_page;
