import React from 'react';

import { axe } from '@site/test/axe';
import { freezeBeforeAll } from '@site/test/utils';
import { render, screen } from '@testing-library/react';

import Example from '@examples/custom-disable-row';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;

test('should not have AXE violations', async () => {
  container = render(<Example />).container;
  expect(await axe(container)).toHaveNoViolations();
});

test('should render only 3 rows', () => {
  render(<Example />);
  expect(screen.getAllByRole('row')[2]).toBeEmptyDOMElement();
});
