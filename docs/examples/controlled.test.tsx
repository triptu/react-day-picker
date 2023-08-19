import React from 'react';

import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { axe } from '../../test/axe';
import { getMonthCaption } from '../../test/selectors';
import { user } from '../../test/user';
import { freezeBeforeAll } from '../../test/utils';
import Example from './controlled';

const today = new Date(2022, 5, 10);

function getTodayButton() {
  return screen.getByRole('button', { name: 'Go to Today' });
}

freezeBeforeAll(today);
test('should not have AXE violations', async () => {
  const html = render(<Example />).container;
  expect(await axe(html)).toHaveNoViolations();
});

describe('when the "Go to today" button is clicked', () => {
  beforeEach(async () => {
    render(<Example />);
    await act(() => user.click(getTodayButton()));
  });
  test('the button should be disabled', async () => {
    expect(getTodayButton()).toBeDisabled();
  });
  test('should display the current month', () => {
    expect(getMonthCaption()).toHaveTextContent('June 2022');
  });
});
