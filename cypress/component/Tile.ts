export class Tile {
  link() {
    return cy.get('[data-test-id="TILE_LINK"]');
  }

  title() {
    return cy.get('[data-test-id="TILE_TITLE"]');
  }

  subtitle() {
    return cy.get('p[class*="rail-tile__subtitle"]');
  }
}
