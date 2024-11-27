import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { loginTestData } from "../fixtures/saucedemoTestData";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
describe('Login page tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    loginPage.checkLoginLogoDisplayed();
  });

  it('User login with valid username and password', () => {
    loginPage.typeInInputByLocator(loginPage.usernameField, loginTestData.username);
    loginPage.typeInInputByLocator(loginPage.passwordField, loginTestData.password);
    loginPage.clickLoginBttn();
    productsPage.checkProductsTitleDisplayed();
  });

  it('Error message displayed after user try to login with valid username and invalid password', () => {
    loginPage.typeInInputByLocator(loginPage.usernameField, loginTestData.username);
    loginPage.typeInInputByLocator(loginPage.passwordField, loginTestData.invalidPassword);
    loginPage.clickLoginBttn();
    loginPage.checkErrorMssgDisplayedByName(loginTestData.invalidLoginOrPasswordMssg);
  });

  it('Error message displayed after user try to login with blank username input and valid password', () => {
    loginPage.checkLoginLogoDisplayed();
    loginPage.typeInInputByLocator(loginPage.passwordField, loginTestData.password);
    loginPage.clickLoginBttn();
    loginPage.checkErrorMssgDisplayedByName(loginTestData.emptyUsernameFieldMssg);
  });
});