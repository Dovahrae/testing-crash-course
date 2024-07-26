describe("Password Validator", () => {
    it("checks for a good password", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("kn1ttedpumk!n");
        cy.get('[data-cy="login"]').click();
        cy.get('[data-cy="valid-password"]');
    });

    it("checks for a short password", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("kn1ttedpumk!n");
        cy.get('[data-cy="login"]').click();
        cy.get('[data-cy="valid-password"]');
    });
});
