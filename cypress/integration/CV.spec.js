describe('user flow', () => {
  it('create and preview cv', () => {
    cy.visit('/editor/add');
    cy.findByTitle(/personal/i).click();
    cy.findByLabelText(/first name/i).type('Kamisato');
    cy.findByLabelText(/last name/i).type('Ayato');
    cy.findByLabelText(/phone number/i).type('+62 818 3300 3300');
    cy.findByLabelText(/email address/i).type('kamisato.ayato@gmail.com');
    cy.findByLabelText(/^Address$/).type(
      ' Jl. Rasamala Raya 47C - Tebet - Menteng Dalam Jakarta Selatan, 12870',
    );
    cy.findByRole('button', { name: /submit/i })
      .as('submitBtn')
      .click();

    cy.findByRole('link', { name: /personal info/i }).should('exist');
    cy.findByTitle(/summary/i).click();
    cy.findByLabelText(/summary/i).type(
      'I am a passionate guy with a lot of curiosity. I love to learn new things',
    );
    cy.get('@submitBtn').click();

    cy.findByTitle(/education/i).click();
    cy.findByLabelText(/institution/i).type('University of Tokyo');
    cy.findByLabelText(/degree/i).type('BBA');
    cy.findByLabelText(/field/i).type('Business Administration');
    cy.findByLabelText(/from/i).type('2010-05');
    cy.findByLabelText(/to/i).type('2014-05');
    cy.get('@submitBtn').click();

    cy.findByRole('link', { name: /personal info/i }).click();
    cy.findByRole('button', { name: /delete/i }).click();
    cy.findByRole('button', { name: /cancel/i })
      .should('be.focused')
      .click();

    cy.findByTitle(/photo/i).click();
    cy.findByLabelText(/photo/i).attachFile('user-profile.png');
    cy.get('@submitBtn').click();

    cy.findByTitle(/work/i).click();
    cy.findByLabelText(/role/i).type('Marketing intern');
    cy.findByLabelText(/company/i).type('Facebook');
    cy.findByLabelText(/from/i).type('2015-05');
    cy.findByLabelText(/to/i).type('2016-07');
    cy.findByLabelText(/description/i).type(
      'Worked as intern in facebook group marketing campaign',
    );
    cy.get('@submitBtn').click();
    cy.findByRole('button', { name: /preview/i }).click();
  });
});
