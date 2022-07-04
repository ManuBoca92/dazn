import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.dazn.com/en-GB',
    viewportHeight: 1200,
    viewportWidth: 1500,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    waitForAnimations: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
