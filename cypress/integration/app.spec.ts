/// <reference types="cypress" />

context("E2E", () => {
  it("render response from starting message", () => {
    cy.visit("https://sandbox.dst.samagra.io");
    cy.wait(1000);
    cy.get("div").contains("Select your user profile to log in");
  });
});