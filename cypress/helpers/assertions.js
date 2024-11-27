export class Assertions {
  static expectToDisplayElementContainsValue(locator, value) {
    cy.get(locator)
      .contains(value)
      .should('be.visible');
  };

  static expectElementToContains(locator, value) {
    cy.get(locator)
      .contains(value)
  }

  static expectElementNotExist(locator) {
    cy.get(locator)
      .should('not.exists')
  }

  static expectElementToExist(locator) {
    cy.get(locator)
      .should('exists')
  }
}