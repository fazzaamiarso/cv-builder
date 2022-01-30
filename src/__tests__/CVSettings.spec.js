import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CVSettings from '../components/CVSettings/CVSettings';
import fakeData from '../testUtils/fakeData';

it('render the right structure', () => {
  //to test component using stuff from react-router must render the router as well
  render(<CVSettings sectionsAdded={fakeData} />, {
    wrapper: MemoryRouter,
  });
  expect(
    screen.getByRole('heading', { name: /cv setting/i, level: 2 }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /summary/i })).toBeInTheDocument();

  //have to use testId because couldnt find the right way to test. Need to refactor maybe?
  const educationList = screen.getByTestId('educationList');
  const workList = screen.getByTestId('workList');

  expect(within(educationList).getAllByRole('listitem')).toHaveLength(2);
  expect(within(workList).getAllByRole('listitem')).toHaveLength(1);
});

it('render empty state if no item stored', () => {
  //to test component using stuff from react-router must render the router as well
  render(<CVSettings sectionsAdded={[]} />, {
    wrapper: MemoryRouter,
  });

  expect(
    screen.getByText(/there is no section added yet/i),
  ).toBeInTheDocument();
});
