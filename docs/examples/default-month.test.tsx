import React from 'react';

import { render } from '@testing-library/react';

import { getMonthCaption } from '../../test/selectors';
import { freezeBeforeAll } from '../../test/utils';
import Example from './default-month';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should display September 1979', () => {
  expect(getMonthCaption()).toHaveTextContent('September 1979');
});
