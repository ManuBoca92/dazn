export class Navigation {
  getNavigationLinks() {
    return cy.get('[data-test-id="HEADER_NAVIGATION_ITEM_LINK"]');
  }
}
