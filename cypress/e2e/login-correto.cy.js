describe("Pagina de login", () => {
    beforeEach(() => {
      cy.visit("https://adopet-frontend-cypress.vercel.app/");
      cy.get('[data-test="login-button"]').click();

    })

  it("Deve preencher os campos de login correto e autenticar o usuario na pagina", () => {
   cy.login('curupira@hotmail.com','Senha1234@')
  });

});
