import { Base } from './Base';

export class SchedulePage extends Base {
  sportFilterButton() {
    return cy.get('[data-test-id="SPORTFILTER_BUTTON"]');
  }

  sportFilterListItem() {
    return cy.get('[data-test-id="SPORTFILTER_LIST_ITEM"]');
  }

  allVisibleActiveDates() {
    return cy
      .get('[data-test-id="DATETILE_TILE"]>div:visible')
      .not('div[class*="date-tile__is-disabled"]');
  }

  emptyScheduleMessage() {
    return cy.get('[data-test-id="GRID_MESSAGE"]');
  }
}
