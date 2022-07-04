/// <reference types="cypress" />
import { SchedulePage } from '../pages';

const schedulePage = new SchedulePage();
const tile = schedulePage.rail().tile();

describe('Schedule Journey Test', () => {
  before('go to home page', () => {
    schedulePage.interceptPageRequest().as('page');
    schedulePage.openUrl('/schedule');
    cy.wait('@page');
  });

  it('select a different date and apply sport filter', () => {
    schedulePage.allVisibleActiveDates().eq(3).click();
    schedulePage.sportFilterButton().click();
    schedulePage.sportFilterListItem().eq(0).click();
    schedulePage.sportFilterButton().click();
  });

  it('check the content retrieved', () => {
    cy.get('body').then(($body) => {
      if ($body.find('section[class*="schedule-grid__schedule"]>p').length) {
        schedulePage.emptyScheduleMessage().should('be.visible');
      } else {
        tile.link().should('be.visible');
        tile.title().should('be.visible');
        tile.subtitle().should('be.visible');
      }
    });
  });
});
