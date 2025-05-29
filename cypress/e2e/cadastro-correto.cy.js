describe("Pagina de cadastro", () => {
  it("Deve preencher os campos de formulario correto para cadast. de um novo usuario", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  cy.get('[data-test="register-button"]').click();
  })
    it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
      cy.cadastrar('Felipe B Silva','curupira@hotmail.com', 'enha1234@')  
  });
});
