/// <reference types="cypress" />

import { HomePage } from '../pages';

const homePage = new HomePage();
const banner = homePage.banner();
const rail = new HomePage().rail();

describe('Browse Content Test', () => {
  before('go to home page', () => {
    homePage.interceptPageRequest().as('page');
    homePage.openUrl('/home');
    cy.wait('@page');
  });

  it('scroll rail and select a content tile', () => {
    const tile = rail.tile();
    homePage
      .getRails()
      .eq(2)
      .scrollIntoView()
      .within(() => {
        rail.arrowNextButton().click();
        tile.title().eq(5).invoke('text').as('bannerTitle');
        tile.link().eq(5).click();
      });
  });

  it('check the information available on the marketing banner, for the selected event.', function () {
    banner.title().should('be.visible').should('have.text', this.bannerTitle);
    banner.description().should('be.visible');
    banner.image().should('be.visible');
  });
});
