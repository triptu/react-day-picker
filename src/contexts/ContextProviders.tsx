import React from 'react';

import { DayPickerProps } from 'DayPicker';

import { CalendarProvider } from './CalendarContext';
import { DayPickerProvider } from './DayPickerContext';
import { SelectionProvider } from './SelectionContext';

export interface ContextProvidersProps {
  dayPickerProps: DayPickerProps;
  children: React.ReactNode;
}

/**
 * Provide the value for all the context providers.
 * @internal
 */
export function ContextProviders(
  contextProviderProps: ContextProvidersProps
): JSX.Element {
  const { mode = 'none', ...dayPickerProps } =
    contextProviderProps.dayPickerProps;
  return (
    <DayPickerProvider mode={mode} dayPickerProps={dayPickerProps}>
      <CalendarProvider>
        <SelectionProvider>{contextProviderProps.children}</SelectionProvider>
      </CalendarProvider>
    </DayPickerProvider>
  );
}
