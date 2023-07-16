import React from 'react';

import { DaysSelectionMode } from 'DayPicker';

import { DayPickerWeek } from 'contexts/Props';
import { CustomComponentSharedProps } from 'types/components';

export type MonthGridProps<TMode extends DaysSelectionMode> =
  CustomComponentSharedProps<TMode> & {
    /** The month where the grid is displayed. */
    month: Date;
    /** The weeks contained in the grid. */
    weeks: DayPickerWeek[];
    displayIndex: number;
  };

/** Render the grid with the weeks for the month. */
export function MonthGrid<TMode extends DaysSelectionMode>(
  props: MonthGridProps<TMode>
) {
  const {
    formatters: { formatMonthCaption }
  } = props.dayPickerProps;
  return <div role="grid">{formatMonthCaption(props.month)}</div>;
}
