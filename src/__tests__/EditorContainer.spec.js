/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-commented-out-tests */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { EditorContainer } from '../components/EditorContainer';
import App from '../App';

describe('Editor Container', () => {
  it('render the correct form for selected section', () => {
    render(
      <MemoryRouter initialEntries={['/editor/add']}>
        <App />
      </MemoryRouter>,
    );
    const sectionButton = screen.getByText(/education/i);

    userEvent.click(sectionButton);
    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('Add the filled section form to arrangement column', async () => {
    const fakeInput = {
      firstName: 'Bambang',
      lastName: 'Susanto',
      phoneNumber: '12345',
      email: 'bambang.susanto@example.com',
      address: '42 oakwood drive',
    };

    render(
      <MemoryRouter initialEntries={['/editor/add']}>
        <App />
      </MemoryRouter>,
    );

    const sectionButton = screen.getByRole('link', { name: /personal/i });
    userEvent.click(sectionButton);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const phoneNumber = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const address = screen.getByLabelText(/^Address$/);

    userEvent.type(firstName, fakeInput.firstName);
    userEvent.type(lastName, fakeInput.lastName);
    userEvent.type(phoneNumber, fakeInput.phoneNumber);
    userEvent.type(email, fakeInput.email);
    userEvent.type(address, fakeInput.address);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);

    const allTextBox = await screen.findAllByRole('textbox');
    //must use wait for because the submit event's reset call is async, without it, will get the filled value because it is not resetted yet
    allTextBox.forEach(textbox => expect(textbox).toHaveValue(''));

    // react-hook-form onSubmit is always asynchronous
    expect(
      await screen.findByRole('link', { name: /personal info/i }),
    ).toBeInTheDocument();
  });

  it('Able to edit form by clicking added section in arrangement column', async () => {
    const fakeInput = {
      firstName: 'Bambang',
      lastName: 'Susanto',
      phoneNumber: '12345',
      email: 'bambang.susanto@example.com',
      address: '42 oakwood drive',
    };

    render(
      <MemoryRouter initialEntries={['/editor/add']}>
        <App />
      </MemoryRouter>,
    );

    const sectionButton = screen.getByRole('link', { name: /personal/i });
    userEvent.click(sectionButton);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const phoneNumber = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const address = screen.getByLabelText(/^Address$/);
    //element above will be unmounted by route change

    userEvent.type(firstName, fakeInput.firstName);
    userEvent.type(lastName, fakeInput.lastName);
    userEvent.type(phoneNumber, fakeInput.phoneNumber);
    userEvent.type(email, fakeInput.email);
    userEvent.type(address, fakeInput.address);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);

    const addedSection = await screen.findByRole('link', {
      name: /personal info/i,
    });
    userEvent.click(addedSection);

    const addedfirstName = screen.getByLabelText(/first name/i);
    expect(addedfirstName).toHaveValue(fakeInput.firstName);

    userEvent.clear(addedfirstName);
    userEvent.type(addedfirstName, 'Mamen');

    const saveButton = screen.getByRole('button', { name: /save/i });
    userEvent.click(saveButton);

    expect(
      //using findBy or getBy will throw error immediately and cant be asserted
      screen.queryByRole('link', { name: fakeInput.firstName }),
    ).not.toBeInTheDocument();
  });
});

describe('Form', () => {
  it('Show required error messages if no value passed to textbox', async () => {
    render(
      <MemoryRouter initialEntries={['/editor/add']}>
        <App />
      </MemoryRouter>,
    );

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const errorMessages = await screen.findAllByRole('alert');
    //using roles make it easier to test components
    expect(errorMessages).toHaveLength(5);
    errorMessages.forEach(message => expect(message).toBeVisible());
  });
  it('Submit the form if value is valid', async () => {
    render(
      <MemoryRouter initialEntries={['/editor/add']}>
        <App />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByRole('link', { name: /education/i }));

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
