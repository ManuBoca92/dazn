import { Navigation, Banner, Rail } from '../component';

export class Base {
  openUrl(text: string) {
    return cy.visit(text);
  }

  navigation() {
    return new Navigation();
  }

  sportsMenuList() {
    return cy.get('[data-test-id="SPORTS-MENU-LIST-ITEM"]');
  }

  getRails() {
    return cy.get('[data-test-id*="RAIL"]');
  }

  getAllTiles(railIndex: number) {
    return new Rail().getTilesComponent(this.getRails().eq(railIndex));
  }

  rail(): Rail {
    return new Rail();
  }

  banner(): Banner {
    return new Banner();
  }

  interceptPageRequest() {
    return cy.intercept('https://logx.optimizely.com/v1/events');
  }

  interceptRailsRequest() {
    return cy.intercept(
      'https://rail-router.discovery.indazn.com/eu/v3/Rail?*'
    );
  }
}
