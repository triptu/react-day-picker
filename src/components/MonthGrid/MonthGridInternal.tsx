import React from 'react';

import { DayPickerWeek } from 'contexts/Calendar';
import { useProps } from 'contexts/Props';

import { MonthGrid } from './MonthGrid';

/** The props for the {@link MonthGridInternal} component. */
export interface MonthGridInternalProps {
  /** The month where the grid is displayed. */
  month: Date;
  /** The weeks contained in the grid. */
  weeks: DayPickerWeek[];
  displayIndex: number;
}

/** Render a {@link MonthGridProps} using the hooks. */
export function MonthGridInternal(props: MonthGridInternalProps): JSX.Element {
  const dayPickerProps = useProps();
  return <MonthGrid {...props} dayPickerProps={dayPickerProps} />;
}
