import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { CartPage } from "../pages/cartPage";
import { loginTestData, productsName } from "../fixtures/saucedemoTestData";

const cartPage = new CartPage();
const loginPage = new LoginPage();
const productsPage = new ProductsPage();
describe('Add and remove product from cart', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    loginPage.checkLoginLogoDisplayed();
    loginPage.typeInInputByLocator(loginPage.usernameField, loginTestData.username);
    loginPage.typeInInputByLocator(loginPage.passwordField, loginTestData.password);
    loginPage.clickLoginBttn();
    productsPage.checkProductsTitleDisplayed();
  });

  it('User can add multiple products to the Cart', () => {
    productsPage.addProductToCart(productsPage.addSauceLabsBackpack);
    productsPage.addProductToCart(productsPage.addSauceLabsOnesie);
    productsPage.checkCartBageContainsAmountOfItem(2);
    productsPage.clickShoppingCartIcon();
    cartPage.checkTitleDisplayed();
    cartPage.checkProductDisplayedByName(productsName.sauceLabsOnesie);
    cartPage.checkProductDisplayedByName(productsName.sauceLabsBackpack);
  });

  it('Remove multiple products from the cart on the Products page', () => {
    productsPage.checkCartBageContainsAmountOfItem(2);
    productsPage.deleteProductFromCart(productsPage.deleteSauceLabsBackpack);
    productsPage.deleteProductFromCart(productsPage.deleteSauceLabsOnesie);
    productsPage.checkshoppingCartBadgeNotShown();
    productsPage.clickShoppingCartIcon();
    cartPage.checkTitleDisplayed();
    cartPage.checkCartIsEmpty();
  });
});