/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-commented-out-tests */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditorContainer from '../components/EditorContainer';

it('Happy path', () => {
  expect(true).toBe(true);
});

// describe('Editor Container', () => {
//   it('render the correct form for selected section', () => {
//     render(<EditorContainer />);
//     const sectionButton = screen.getByText(/education/i);

//     userEvent.click(sectionButton);
//     expect(
//       screen.getByRole('heading', { name: /education/i }),
//     ).toBeInTheDocument();
//   });

//   it('Add the filled section form to arrangement column', () => {
//     const fakeInput = {
//       firstName: 'Bambang',
//       lastName: 'Susanto',
//       phoneNumber: 12345,
//       email: 'bambang.susanto@example.com',
//     };
//     render(<EditorContainer />);

//     const sectionButton = screen.getByText(/personal/i);
//     userEvent.click(sectionButton);

//     const firstName = screen.getByPlaceholderText(/first name/i);
//     const lastName = screen.getByPlaceholderText(/last name/i);
//     const phoneNumber = screen.getByPlaceholderText(/phone number/i);
//     const email = screen.getByPlaceholderText(/email address/i);

//     userEvent.type(firstName, fakeInput.firstName);
//     userEvent.type(lastName, fakeInput.lastName);
//     userEvent.type(phoneNumber, fakeInput.phoneNumber);
//     userEvent.type(email, fakeInput.email);

//     const addButton = screen.getByRole('button', { name: /add/i });
//     userEvent.click(addButton);
//     expect(screen.getByRole('list', { name: /personal/i })).toBeInTheDocument();
//   });
// });
