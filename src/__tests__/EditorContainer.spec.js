/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-commented-out-tests */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
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

    expect(firstName.textContent).toBe('');
    expect(lastName.textContent).toBe('');
    expect(phoneNumber.textContent).toBe('');
    // react-hook-form onSubmit is always asynchronous
    expect(
      await screen.findByRole('link', { name: fakeInput.firstName }),
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
      name: fakeInput.firstName,
    });
    userEvent.click(addedSection);

    const addedfirstName = screen.getByLabelText(/first name/i);
    expect(addedfirstName).toHaveValue(fakeInput.firstName);

    userEvent.clear(addedfirstName);
    userEvent.type(addedfirstName, 'Mamen');

    const saveButton = screen.getByRole('button', { name: /save/i });
    userEvent.click(saveButton);

    expect(
      await screen.findByRole('link', {
        name: 'Mamen',
      }),
    ).toBeInTheDocument();
    expect(
      //using findBy or getBy will throw error immediately and cant be asserted
      screen.queryByRole('link', { name: fakeInput.firstName }),
    ).not.toBeInTheDocument();
  });
});
