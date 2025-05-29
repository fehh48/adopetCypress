const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/results', // pasta onde vai ficar os reportes
      overwrite: false,  //// nao vai subreescrever encima dos nossos testes
      html: true,      //pode gerar arquivo em HTML. pode gerar em mais de um framework
      json: false,
      timestamp: "mmddyyyy_HHMMss" }   // formato de hora dia e ETc, podendo ser mudado quando quiser
  },
});
