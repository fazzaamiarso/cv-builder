/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-commented-out-tests */
import { screen, fireEvent, within } from '@testing-library/react';
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

    const toast = within(await screen.findByRole('alert'));
    expect(toast.getByText(/submit success/i)).toBeInTheDocument();

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
    expect(await screen.findByText(/changes saved/i)).toBeInTheDocument();
    expect(
      await screen.findByRole('link', {
        name: /personal info/i,
      }),
    ).toBeInTheDocument();
    //using findBy or getBy will throw error immediately and cant be asserted
  });

  it('Delete an added section', async () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

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
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /confirm/i }));

    //the order of assertion matter apparently
    expect(
      screen.getByText(/there is no section added yet/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/deleted a section/i)).toBeInTheDocument();
  });

  it('Can only add 1 personal info and summary', async () => {
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

    //must use await because submit is async
    userEvent.type(
      await screen.findByLabelText(/first name/i),
      personal.firstName,
    );
    userEvent.type(
      await screen.findByLabelText(/last name/i),
      personal.lastName,
    );
    userEvent.type(
      await screen.findByLabelText(/phone number/i),
      personal.phoneNumber,
    );
    userEvent.type(
      await screen.findByLabelText(/email address/i),
      personal.email,
    );
    userEvent.type(
      await screen.findByLabelText(/^Address$/i),
      personal.address,
    );
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText(/section already exist/i),
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
  it('Clear the form if clear button is clicked', async () => {
    renderWithRouter(<App />, ['/editor/add']);
    userEvent.click(screen.getByTitle(/education/i));

    const institutionName = screen.getByLabelText(/institution/i);
    const degreeName = screen.getByLabelText(/degree/i);
    const fieldName = screen.getByLabelText(/field/i);
    const fromName = screen.getByLabelText(/from/i);
    const toName = screen.getByLabelText(/to/i);

    const { education } = fakeInput;
    userEvent.type(institutionName, education.institution);
    userEvent.type(degreeName, education.degree);
    userEvent.type(fieldName, education.fieldOfStudy);

    // userEvent doesnt have change event so we have to use fireEvent
    fireEvent.change(fromName, { target: { value: education.studyFrom } });
    fireEvent.change(toName, { target: { value: education.studyTo } });

    userEvent.click(screen.getByRole('button', { name: /clear/i }));

    expect(await screen.findByText(/form cleared/i)).toBeInTheDocument();
    const allTextBox = await screen.findAllByRole('textbox');
    //must use wait for because the submit event's reset call is async, without it, will get the filled value because it is not resetted yet
    allTextBox.forEach(textbox => expect(textbox).toHaveValue(''));
  });
  it('Image input render image when uploaded', async () => {
    const file = new File(['Test'], 'Test.png', { type: 'image/png' });

    renderWithRouter(<App />, ['/editor/add']);
    userEvent.click(screen.getByTitle(/photo/i));

    const imageUploader = screen.getByLabelText(/photo/i);
    userEvent.upload(imageUploader, file);

    expect(
      await screen.findByRole('img', { name: /user profile/i }),
    ).toBeInTheDocument();
    expect(imageUploader.files).toHaveLength(1);
  });
});
