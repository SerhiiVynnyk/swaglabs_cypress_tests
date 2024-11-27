import { Actions } from "../helpers/actions";
import { Assertions } from "../helpers/assertions";

export class LoginPage {
  loginLogo = '.login_logo';
  usernameField = '#user-name';
  passwordField = '#password';
  loginBttn = '#login-button';
  errorMessage = '[data-test="error"]'

  checkLoginLogoDisplayed() {
    Assertions.expectToDisplayElementContainsValue(this.loginLogo, 'Swag Labs');
  }

  typeInInputByLocator(locator, text) {
    Actions.typeText(locator, text);
  }

  clickLoginBttn() {
    Actions.clickElementByLocator(this.loginBttn);
  }

  checkErrorMssgDisplayedByName(text) {
    Assertions.expectToDisplayElementContainsValue(this.errorMessage, text);
  }
}