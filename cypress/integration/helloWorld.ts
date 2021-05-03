describe('Hello world appears in console', () => {
  it('successfully loads', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });

    cy.get('@consoleLog').should('be.calledWith', 'Hello Ramil');
  });
});
