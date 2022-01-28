import { render, screen } from '@testing-library/react';
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
  expect(screen.getAllByTestId('educationItem')).toHaveLength(2);
  expect(screen.getAllByTestId('workItem')).toHaveLength(1);
});
