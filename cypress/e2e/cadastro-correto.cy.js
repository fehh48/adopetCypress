describe("Pagina de cadastro", () => {
  it("Deve preencher os campos de formulario correto para cadast. de um novo usuario", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  cy.get('[data-test="register-button"]').click();
  cy.get('[data-test="input-name"]').type('Felipe B Silva');
  cy.get('[data-test="input-email"]').type('curupira@hotmail.com');
  cy.get('[data-test="input-password"]').type('Senha1234@');
  cy.get('[data-test="input-confirm-password"]').type('Senha1234@');
  cy.get('[data-test="submit-button"]').click();


  });
});
