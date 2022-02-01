import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (component, routeEntries = ['/']) => {
  render(
    <MemoryRouter initialEntries={routeEntries}>{component}</MemoryRouter>,
  );
};
