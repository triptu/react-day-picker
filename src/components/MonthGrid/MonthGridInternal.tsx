import React from 'react';

import { DaysSelectionMode } from 'DayPicker';

import { useCalendar } from 'contexts/CalendarContext';
import { useProps } from 'contexts/PropsContext';

import { MonthGrid, MonthGridProps } from './MonthGrid';

/**
 * The props for the {@link MonthGridInternal} component.
 *
 * @internal
 */
export type MonthGridInternalProps<TMode extends DaysSelectionMode> = Omit<
  MonthGridProps<TMode>,
  'dayPickerProps' | 'calendar'
>;

/** Render a {@link MonthGridProps} using the hooks.
 *
 * @internal
 */
export function MonthGridInternal<TMode extends DaysSelectionMode>(
  props: MonthGridInternalProps<TMode>
): JSX.Element {
  const dayPickerProps = useProps();
  const calendar = useCalendar();
  return (
    <MonthGrid {...props} calendar={calendar} dayPickerProps={dayPickerProps} />
  );
}
