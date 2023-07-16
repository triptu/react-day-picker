import React from 'react';

import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { CalendarProvider } from './CalendarContext';
import { PropsProvider } from './PropsContext';

export interface ContextProvidersProps<TMode extends DaysSelectionMode> {
  dayPickerProps: DayPickerProps<TMode>;
  children: React.ReactNode;
}

/**
 * Provide the value for all the context providers.
 * @internal
 */
export function ContextProviders<TMode extends DaysSelectionMode>(
  props: ContextProvidersProps<TMode>
): JSX.Element {
  return (
    <PropsProvider dayPickerProps={props.dayPickerProps}>
      <CalendarProvider>{props.children}</CalendarProvider>
    </PropsProvider>
  );
}
