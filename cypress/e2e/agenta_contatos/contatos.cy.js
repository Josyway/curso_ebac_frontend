describe("Deverá acessar a agenda de contatos", () => {
    beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    // TESTE - INCLUIR CONTATO
    it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("Josyway Paulo");
    cy.get('input[type="email"]').type("josywaypaulo@gmail.com");
    cy.get('input[type="tel"]').type("(84)999378986");
    cy.contains("Adicionar").click();
    cy.screenshot("teste-incluir");
    });
    // TESTE - EDITAR CONTATO
    it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear().type("Maria Jose");
    cy.get('input[type="email"]').clear().type("mariajose@gmail.com");
    cy.get('input[type="tel"]').clear().type("(84)994944949");
    cy.get(".alterar").click();
    cy.screenshot("Editar");
    });
    // TESTE - REMOVER CONTATO
    it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.screenshot("Remover");
    });
});