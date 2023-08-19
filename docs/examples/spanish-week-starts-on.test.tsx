import React from 'react';

import { render } from '@testing-library/react';

import { getMonthGrid } from '../../test/selectors';
import { freezeBeforeAll } from '../../test/utils';
import Example from './spanish-week-starts-on';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => render(<Example />));

test('should have "Domingo" as first day of week', () => {
  expect(getMonthGrid().firstChild.firstChild.firstChild).toHaveAccessibleName(
    'domingo'
  );
});
