import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouter } from './testUtils/TestUtils';

it('render No match fallback page if no page found', () => {
  renderWithRouter(<App />, ['/randomPath']);
  expect(screen.getByText(/no page found/i)).toBeInTheDocument();
});

it('render the right page if page found', () => {
  renderWithRouter(<App />, ['/editor/add']);

  expect(
    screen.getByRole('heading', { name: /fill section/i }),
  ).toBeInTheDocument();
  expect(screen.getByTitle(/education/i)).toBeInTheDocument();
  expect(screen.getByTitle(/personal/i)).toBeInTheDocument();
  expect(screen.getByTitle(/work/i)).toBeInTheDocument();
});

it('can go back home if page not found', () => {
  //integration?
  renderWithRouter(<App />, ['/nonexistentPath']);

  expect(screen.getByText(/no page found/i)).toBeInTheDocument();

  const backLink = screen.getByRole('link', /go back home/i);
  userEvent.click(backLink);

  expect(
    screen.getByRole('heading', { name: /dashboard/i }),
  ).toBeInTheDocument();
});
