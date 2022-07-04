import { Tile } from './Tile';

export class Rail {
  getTilesComponent(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    return element.find('article');
  }

  arrowNextButton() {
    return cy.get('[data-test-id="CHEVRON_NEXT"]');
  }
  arrowPrevButton() {
    return cy.get('[data-test-id="CHEVRON_PREV"]');
  }

  tile(): Tile {
    return new Tile();
  }
}
