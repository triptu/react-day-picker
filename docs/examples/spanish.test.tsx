import React from 'react';

import { render } from '@testing-library/react';

import { axe } from '../../test/axe';
import { getMonthCaption } from '../../test/selectors';
import { freezeBeforeAll } from '../../test/utils';
import Example from './spanish';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('should localize the caption in Spanish', () => {
  expect(getMonthCaption()).toHaveTextContent('noviembre 2021');
});
