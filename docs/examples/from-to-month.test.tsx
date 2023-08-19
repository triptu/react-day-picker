import React from 'react';

import { act, render } from '@testing-library/react';
import { differenceInMonths } from 'date-fns';

import { axe } from '../../test/axe';
import { getNextButton, getPrevButton } from '../../test/selectors';
import { user } from '../../test/user';
import Example from './from-to-month';

const fromDate = new Date(2015, 5);
const toDate = new Date(2015, 10);
let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('the previous month button should be disabled', () => {
  expect(getPrevButton()).toBeDisabled();
});

test('the next month button should not be disabled', () => {
  expect(getNextButton()).not.toBeDisabled();
});

describe('when navigating to the last month', () => {
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await act(() => user.click(getNextButton()));
    }
  });

  test('the previous month button should not be disabled', () => {
    expect(getPrevButton()).not.toBeDisabled();
  });

  test('the next month button should be disabled', () => {
    expect(getNextButton()).toBeDisabled();
  });
});
