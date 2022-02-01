/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-commented-out-tests */
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../testUtils/TestUtils';
import fakeInput from '../testUtils/fakeInput';
import App from '../App';

describe('Editor Container', () => {
  beforeEach(() => {
    renderWithRouter(<App />, ['/editor/add']);
  });

  it('render the correct form for selected section', () => {
    userEvent.click(screen.getByTitle(/education/i)); //get svg by title
    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('Add the filled section form to arrangement column', async () => {
    userEvent.click(screen.getByTitle(/personal/i));

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const phoneNumber = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const address = screen.getByLabelText(/^Address$/);

    const { personal } = fakeInput;
    userEvent.type(firstName, personal.firstName);
    userEvent.type(lastName, personal.lastName);
    userEvent.type(phoneNumber, personal.phoneNumber);
    userEvent.type(email, personal.email);
    userEvent.type(address, personal.address);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const allTextBox = await screen.findAllByRole('textbox');
    //must use wait for because the submit event's reset call is async, without it, will get the filled value because it is not resetted yet
    allTextBox.forEach(textbox => expect(textbox).toHaveValue(''));

    // react-hook-form onSubmit is always asynchronous
    expect(
      await screen.findByRole('link', { name: /personal info/i }),
    ).toBeInTheDocument();
  });

  it('Able to edit form by clicking added section in arrangement column', async () => {
    userEvent.click(screen.getByTitle(/personal/i));

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const phoneNumber = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const address = screen.getByLabelText(/^Address$/);
    //element above will be unmounted by route change

    const { personal } = fakeInput;
    userEvent.type(firstName, personal.firstName);
    userEvent.type(lastName, personal.lastName);
    userEvent.type(phoneNumber, personal.phoneNumber);
    userEvent.type(email, personal.email);
    userEvent.type(address, personal.address);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const addedSection = await screen.findByRole('link', {
      name: /personal info/i,
    });
    userEvent.click(addedSection);

    const addedfirstName = screen.getByLabelText(/first name/i);
    expect(addedfirstName).toHaveValue(personal.firstName);

    userEvent.clear(addedfirstName);
    userEvent.type(addedfirstName, 'Mamen');

    userEvent.click(screen.getByRole('button', { name: /save/i }));
    //this save event will throw act() error because it causes state update that werent expected when the test end there.

    //apparently it work because it cause the component to reerender and the dave is async
    expect(
      await screen.findByRole('link', {
        name: /personal info/i,
      }),
    ).toBeInTheDocument();
    //using findBy or getBy will throw error immediately and cant be asserted
  });

  it('Delete an added section', async () => {
    userEvent.click(screen.getByTitle(/personal/i));

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const phoneNumber = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const address = screen.getByLabelText(/^Address$/);
    //element above will be unmounted by route change

    const { personal } = fakeInput;
    userEvent.type(firstName, personal.firstName);
    userEvent.type(lastName, personal.lastName);
    userEvent.type(phoneNumber, personal.phoneNumber);
    userEvent.type(email, personal.email);
    userEvent.type(address, personal.address);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const addedSection = await screen.findByRole('link', {
      name: /personal info/i,
    });
    userEvent.click(addedSection);

    userEvent.click(screen.getByRole('button', { name: /delete/i }));

    expect(
      screen.getByText(/there is no section added yet/i),
    ).toBeInTheDocument();
  });
});

describe('Form', () => {
  it('Show required error messages if no value passed to textbox', async () => {
    renderWithRouter(<App />, ['/editor/add']);
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const errorMessages = await screen.findAllByRole('alert');
    //using roles make it easier to test components
    expect(errorMessages).toHaveLength(5);
    errorMessages.forEach(message => expect(message).toBeVisible());
  });
  it('Submit the form if value is valid', async () => {
    renderWithRouter(<App />, ['/editor/add']);
    userEvent.click(screen.getByTitle(/education/i));

    const institutionName = screen.getByLabelText(/institution/i);
    const degreeName = screen.getByLabelText(/degree/i);
    const fieldName = screen.getByLabelText(/field/i);
    const fromName = screen.getByLabelText(/from/i);
    const toName = screen.getByLabelText(/to/i);

    userEvent.type(institutionName, 'MIT');
    userEvent.type(degreeName, 'Bsc');
    userEvent.type(fieldName, 'Software Engineering');

    // userEvent doesnt have change event so we have to use fireEve
    fireEvent.change(fromName, { target: { value: '2022-02' } });
    fireEvent.change(toName, { target: { value: '2022-06' } });

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const allTextBox = await screen.findAllByRole('textbox');
    //must use wait for because the submit event's reset call is async, without it, will get the filled value because it is not resetted yet
    allTextBox.forEach(textbox => expect(textbox).toHaveValue(''));
  });
});
