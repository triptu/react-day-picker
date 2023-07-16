import React from 'react';

import { DayPickerWeek } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';

export interface WeekNumberRowHeaderProps {
  week: DayPickerWeek;
}

/** Render the cell with the number of the week. */
export function WeekNumberRowHeader(props: WeekNumberRowHeaderProps) {
  const {
    styles,
    classNames,
    locale,
    labels: { labelWeekNumber }
  } = useDayPicker();
  return (
    <div
      aria-colindex={1}
      role="rowheader"
      aria-label={labelWeekNumber(props.week.weekNumber, { locale })}
      className={classNames.weeknumber_rowheader}
      style={styles.weeknumber_rowheader}
    >
      {props.week.weekNumber}
    </div>
  );
}
