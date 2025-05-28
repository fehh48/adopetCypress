describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  cy.contains('a' , 'Cadastrar').click();
  cy.get('input[name="nome"]').type('Felipe B Silva');
  cy.get('input[name="email"]').type('curupira@hotmail.com');
  cy.get('input[name="password"]').type('Senha1234@');
  cy.get('input[name="confirm_password"]').type('Senha1234@');
  cy.contains('button' , 'Cadastrar').click();
// Test Part 2

cy.visit("https://adopet-frontend-cypress.vercel.app/");
cy.contains('a' , 'Ver pets disponíveis para adoção').click();






  });
});
