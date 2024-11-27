import { Actions } from "../helpers/actions";
import { Assertions } from "../helpers/assertions";

export class ProductsPage {
  productsTitle = '.title';
  addSauceLabsBackpack = '#add-to-cart-sauce-labs-backpack';
  deleteSauceLabsBackpack = '#remove-sauce-labs-backpack'
  addSauceLabsOnesie = '#add-to-cart-sauce-labs-onesie';
  deleteSauceLabsOnesie = '#remove-sauce-labs-onesie';
  cartbadge = '.shopping_cart_badge';
  cartIcon = '.shopping_cart_container';

  checkProductsTitleDisplayed() {
    Assertions.expectToDisplayElementContainsValue(this.productsTitle, 'Products');
  }

  addProductToCart(locator) {
    Actions.clickElementByLocator(locator);
  }

  deleteProductFromCart(locator) {
    Actions.clickElementByLocator(locator);
  }

  checkCartBageContainsAmountOfItem(num) {
    Assertions.expectElementToContains(this.cartbadge, num);
  }

  clickShoppingCartIcon() {
    Actions.clickElementByLocator(this.cartIcon);
  }

  checkshoppingCartBadgeNotShown() {
    Assertions.expectElementNotExist(this.cartbadge);
  }
}