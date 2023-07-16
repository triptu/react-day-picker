import React from 'react';

import { render } from '@testing-library/react';
import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { ContextProviders } from 'contexts/ContextProviders';

/** Render a React Element wrapped with the Root Provider. */
export function customRender<TMode extends DaysSelectionMode>(
  /** The element to render. */
  element: React.ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  dayPickerProps: DayPickerProps<TMode>
) {
  return render(
    <ContextProviders dayPickerProps={dayPickerProps}>
      {element}
    </ContextProviders>
  );
}
