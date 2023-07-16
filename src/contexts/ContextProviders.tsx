import React from 'react';

import { DayPickerProps, DaySelectionMode } from 'components/DayPicker';

import { CalendarProvider } from './Calendar';

export interface ContextProvidersProps<TMode extends DaySelectionMode> {
  dayPickerProps: DayPickerProps<TMode>;
  children: React.ReactNode;
}

/** Provide the value for all the context providers. */
export function ContextProviders<TMode extends DaySelectionMode>(
  props: ContextProvidersProps<TMode>
): JSX.Element {
  return (
    <CalendarProvider dayPickerProps={props.dayPickerProps}>
      {props.children}
    </CalendarProvider>
  );
}
