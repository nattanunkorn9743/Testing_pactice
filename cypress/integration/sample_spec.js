describe("My First Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("nav") // yields <nav>
      .should("be.visible") // yields <nav>
      .should("have.css", "font-family") // yields 'sans-serif'
      .and("match", /serif/);
    //เข้าnav bar ->> ต้องสามารถเห็น ->> มีฟ้อน ->> sans-serfi

    cy.request('GET', '/commands/misc', { 
    })
    //mean สามารถ GET POST ได้อะไรเเบนี้

    //cy.get('input[name=username]').type(username)

    cy.url().should('include', '/action')

    cy.get('h4').should('contain', '.blur')
  });
});
