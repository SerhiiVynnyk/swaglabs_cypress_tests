import { Assertions } from "../helpers/assertions";

export class CartPage {
  yourCartTitle = '.title';
  itemName = '.inventory-item-name';


  checkTitleDisplayed() {
    Assertions.expectToDisplayElementContainsValue(this.yourCartTitle, 'Your Cart');
  }

  checkProductDisplayedByName(name) {
    Assertions.expectToDisplayElementContainsValue(this.itemName, name);
  }

  checkCartIsEmpty() {
    Assertions.expectElementNotExist(this.itemName);
  }
}