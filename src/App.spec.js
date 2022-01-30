import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('render No match fallback page if no page found', () => {
  render(
    <MemoryRouter initialEntries={['/randomPath']}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/no page found/i)).toBeInTheDocument();
});
it('render the right page if page found', () => {
  render(
    <MemoryRouter initialEntries={['/editor/add']}>
      <App />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole('heading', { name: /fill section/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /education/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /personal/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument();
});

it('can go back home if page not found', () => {
  //integration?
  render(
    <MemoryRouter initialEntries={['/nonexistenpath']}>
      <App />
    </MemoryRouter>,
  );
  const backLink = screen.getByRole('link', /go back home/i);

  expect(screen.getByText(/no page found/i)).toBeInTheDocument();

  userEvent.click(backLink);
  expect(
    screen.getByRole('heading', { name: /dashboard/i }),
  ).toBeInTheDocument();
});
