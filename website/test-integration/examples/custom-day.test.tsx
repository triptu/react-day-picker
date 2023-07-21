import React from 'react';

import { freezeBeforeAll } from '@site/test/utils';
import { render, screen } from '@testing-library/react';

import Example from '@examples/custom-day';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

test('should render time elements', () => {
  render(<Example />);
  expect(screen.getByText('(first day)')).toBeInTheDocument();
});
