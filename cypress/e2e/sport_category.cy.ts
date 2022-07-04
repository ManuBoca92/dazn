/// <reference types="cypress" />
import { HomePage } from '../pages';

const homePage = new HomePage();
const tile = homePage.rail().tile();
const banner = homePage.banner();
const navigation = homePage.navigation();

describe('Sport Category Test', () => {
  before('navigate to home page', () => {
    homePage.interceptPageRequest().as('page');
    homePage.openUrl('/home');
    cy.wait('@page');
  });

  it('selects category on sports menu and verify category banner', () => {
    navigation.getNavigationLinks().contains('SPORTS').click();
    homePage.interceptRailsRequest().as('rail');
    homePage.sportsMenuList().contains('Shows').click();
    cy.wait('@rail');
    banner.title().should('be.visible');
    banner.description().should('be.visible');
    banner.image().should('be.visible');
  });

  it('verifies category content rails', () => {
    homePage.getAllTiles(0).eq(0).as('singleTile');
    cy.get('@singleTile').within(() => {
      tile.link().should('be.visible');
      tile.title().should('be.visible');
      tile.subtitle().should('be.visible');
    });
  });
});
