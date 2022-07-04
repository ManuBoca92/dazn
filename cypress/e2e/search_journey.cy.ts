/// <reference types="cypress" />
import { SearchPage } from '../pages';

const searchPage = new SearchPage();
const banner = searchPage.banner();

describe('Search Journey Test', () => {
  before('navigate to search page', () => {
    searchPage.interceptPageRequest().as('page');
    searchPage.openUrl('/search');
    cy.wait('@page');
  });

  it('search for "boxing" and filter search results by a category', () => {
    searchPage.searchInput().type('boxing');
    searchPage.filterByFeatureBtn().click();
  });

  it('select a result', () => {
    searchPage.interceptRailsRequest().as('rail');
    searchPage.searchResults().find('li').first().click();
    cy.wait('@rail');
    banner.title().should('be.visible');
    banner.description().should('be.visible');
  });
});
