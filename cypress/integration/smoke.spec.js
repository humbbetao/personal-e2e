describe('smoke test', () => {
  it('makes sure the welcome message comes up!', () => {
    cy.visit('http://localhost:3001').contains('Hello, world!');
  });
});
