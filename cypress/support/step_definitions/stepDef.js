import { When, Then, Given, And, After, Before } from "cypress-cucumber-preprocessor/steps";

Given('User launches {string} page', (url) => {
    cy.visit(Cypress.env(url));
  });

  // actions

  When('User adds following items to the list', (dataTable) => {
    dataTable.hashes().forEach(elem =>
      {
        cy.addItem(elem.item);
      })
  });

  When('User adds {string} to the list', (item)  => {
    cy.addItem(item);
  });

  When('User toggles item {int}', (number)  => {
    cy.get(`.toggle`).eq(number-1).click();
    cy.log(`Toggle "${number}" clicked`);
  });

  When('User deletes item {string}', (item)  => {
    cy.contains(item).siblings('.destroy').invoke('show').click();
    cy.log(`Item "${item}" deleted`);
  });

  //assertions

  Then('{string} item is displayed', (item)  => {
    cy.get('label').contains(item);
    cy.log(`Page contains "${item}" text`);
  });

  Then('{string} {string} displayed', (item, is)  => {
    cy.isDisplayed(item, is);
  });

  Then('There is/are {int} item/items on the list', (number)  => {
    cy.get(`.toggle`).should('have.length', number);
    cy.log(`Page contains "${number}" items`);
  });

  Then('Item {int} {string} toggled', (number, is)  => {
    cy.isToggled(number, is);
  });