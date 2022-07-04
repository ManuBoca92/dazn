import { Base } from './Base';

export class SearchPage extends Base {
  searchInput() {
    return cy.get('[data-test-id="SEARCH_INPUT"]');
  }

  filterByFeatureBtn() {
    return cy.get('[data-category="searchCategory_features"]');
  }

  searchResults() {
    return cy.get('[data-test-id="SEARCH_SECTION_0"]');
  }
}
