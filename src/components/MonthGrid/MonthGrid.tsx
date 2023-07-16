import React from 'react';

import { DaysSelectionMode } from 'DayPicker';

import { DayPickerWeek } from 'contexts/CalendarContext';

import { CustomComponentProps } from '../CustomComponent';

export type MonthGridProps<TMode extends DaysSelectionMode> = {
  /** The month where the grid is displayed. */
  month: Date;
  /** The weeks contained in the grid. */
  weeks: DayPickerWeek[];
  /** The index where this month is displayed. */
  displayIndex: number;
  /** The current selection mode. */
  mode: TMode | undefined;
} & CustomComponentProps<TMode>;

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
