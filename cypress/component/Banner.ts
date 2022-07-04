export class Banner {
  title() {
    return cy.get('[data-test-id="BANNER_TITLE"]');
  }

  description() {
    return cy.get('[data-test-id="BANNER_DESCRIPTION"]');
  }

  image() {
    return cy.get('[data-test-id="BANNER_IMAGE"]');
  }
}
