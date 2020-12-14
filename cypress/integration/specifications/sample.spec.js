/// <reference types="cypress" />

describe("MEAN", () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should show the sidebar', () => {
    cy.contains("MEAN");
  });

  it('opens the menu', () => {
    cy.get('#menuButton').click();
    cy.wait(700);
  });

  it('opens and closes the menu', () => {
    cy.get('#menuButton').click();
    cy.get('#menuButton').click();
    cy.wait(700);
  });

  it('opens the menu and changes to the Users page', () => {
    cy.get('#menuButton').click();
    cy.contains("Users").click();
    cy.get('#menuButton').click();
  });

});
