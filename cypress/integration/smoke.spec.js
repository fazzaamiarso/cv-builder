describe('Happy path', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains(/dashboard/i);
  });
});
