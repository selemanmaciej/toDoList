Cypress.Commands.add("addItem", (item) => {
    cy.get('.new-todo').clear().type(item).type('{enter}');
    cy.log(`Item "${item}" added`);
  });

Cypress.Commands.add("isToggled", (number, isToggled) => {
    let hasClass = isToggled == "is" ? 'have.class' : 'not.have.class';
    cy.get(`.toggle`).eq(number-1).parent().parent().should(hasClass, 'completed');
    cy.log(`Item "${number}" "${isToggled}" toggled`);
  });

Cypress.Commands.add("isDisplayed", (item, isDisplayed) => {
    let ifExists = isDisplayed == "is" ? 'exist' : 'not.exist';
    cy.contains(item).should(ifExists);
    cy.log(`Text "${item}" "${isDisplayed}" displayed`);
  });