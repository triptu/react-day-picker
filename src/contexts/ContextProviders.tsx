import React from 'react';

import { DayPickerProps, DaysSelectionMode } from 'components/DayPicker';

import { CalendarProvider } from './Calendar/CalendarContext';
import { PropsProvider } from './Props';

export interface ContextProvidersProps<TMode extends DaysSelectionMode> {
  dayPickerProps: DayPickerProps<TMode>;
  children: React.ReactNode;
}

/** Provide the value for all the context providers. */
export function ContextProviders<TMode extends DaysSelectionMode>(
  props: ContextProvidersProps<TMode>
): JSX.Element {
  return (
    <PropsProvider dayPickerProps={props.dayPickerProps}>
      <CalendarProvider>{props.children}</CalendarProvider>
    </PropsProvider>
  );
}
