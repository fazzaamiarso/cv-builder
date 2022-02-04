import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Preview from '../components/CVPreview/Preview';
import fakeData from '../testUtils/fakeData';

it('Render document with the right value with data given', () => {
  render(<Preview sectionsAdded={fakeData} />);

  expect(
    within(screen.getByTestId('education-list')).getAllByRole('listitem'),
  ).toHaveLength(2);
  expect(
    within(screen.getByTestId('work-list')).getAllByRole('listitem'),
  ).toHaveLength(1);
});
it('Invoke close preview when overlay clicked', () => {
  const closePreviewStub = jest.fn();
  render(
    <Preview sectionsAdded={fakeData} onClosePreview={closePreviewStub} />,
  );

  userEvent.click(screen.getByTestId('preview-overlay'));

  expect(closePreviewStub).toHaveBeenCalledTimes(1);
});
