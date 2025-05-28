describe("Pagina de login", () => {
    beforeEach(() => {
      cy.visit("https://adopet-frontend-cypress.vercel.app/");
      cy.get('[data-test="login-button"]').click();

    })

  it("Deve preencher os campos de login correto e autenticar o usuario na pagina", () => {

  cy.get('[data-test="input-loginEmail"]').type('curupira@hotmail.com');
  cy.get('[data-test="input-loginPassword"]').type('Senha1234@');
  cy.get('[data-test="submit-button"]').click();

  });

});
