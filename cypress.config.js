const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 15000,
  retries: 2,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      apiToken: '40edabaa1011904309abfa33ddfcd5e8de80ff1fd58c55836505f5129e5c4cc6',
      projectCode: 'CTH',
      logging: true,
      basePath: 'https://api.qase.io/v1',
      screenshotFolder: 'screenshots',
      sendScreenshot: true,
      runComplete: true,
      rootSuiteTitle: 'Cypress tests',
    },
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://petentregas.store.hubii.co",
  },
});
