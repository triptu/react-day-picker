import React from 'react';

import { render } from '@testing-library/react';
import { DayPicker, DaySelectionMode } from 'react-day-picker';

function Example({ index }: { index: number }) {
  const modes: DaySelectionMode[] = ['single', 'multiple', 'range'];
  const values = [
    new Date(),
    [new Date()],
    { from: new Date(), to: new Date() }
  ];

  return (
    <>
      {modes.map((mode) => (
        <DayPicker mode={mode} selected={values[index]} />
      ))}
    </>
  );
}

test('types', () => {
  const { container } = render(<Example index={0} />);
  expect(container).toMatchSnapshot();
});
