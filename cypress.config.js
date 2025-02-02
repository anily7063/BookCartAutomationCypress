const { defineConfig } = require("cypress");
require('dotenv').config()
module.exports = defineConfig({
  viewportWidth: 1920,
      viewportHeight: 1080,
  e2e: {
    env:{
REGISTER_URL:process.env.REGISTER_URL
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
            testIsolation: false,
  },
});
