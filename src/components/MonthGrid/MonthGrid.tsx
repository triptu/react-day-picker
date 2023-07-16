import React from 'react';

import { DaysSelectionMode } from 'DayPicker';

import { DecoratedProps } from 'components/DecorateComponent';
import { DayPickerWeek } from 'contexts/CalendarContext';

export type MonthGridProps<TMode extends DaysSelectionMode> = {
  /** The month where the grid is displayed. */
  month: Date;
  /** The weeks contained in the grid. */
  weeks: DayPickerWeek[];
  /** The index where this month is displayed. */
  displayIndex: number;
} & DecoratedProps<TMode>;

/**
 * Render the grid with the weeks for the month.
 */
export function MonthGrid<TMode extends DaysSelectionMode>(
  props: MonthGridProps<TMode>
) {
  const {
    formatters: { formatMonthCaption }
  } = props.dayPickerProps;
  return <div role="grid">{formatMonthCaption(props.month)}</div>;
}
