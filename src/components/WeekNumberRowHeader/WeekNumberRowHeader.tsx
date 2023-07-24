import React from 'react';

import { DayPickerWeek } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';

export interface WeekNumberRowHeaderProps {
  week: DayPickerWeek;
}

/** Render the cell with the number of the week. */
export function WeekNumberRowHeader(props: WeekNumberRowHeaderProps) {
  const {
    classNames,
    formatters: { formatWeekNumber },
    labels: { labelWeekNumber },
    locale,
    styles
  } = useDayPicker();
  return (
    <div
      role="rowheader"
      aria-colindex={1}
      aria-label={labelWeekNumber(props.week.weekNumber, { locale })}
      className={classNames.weeknumber_rowheader}
      style={styles.weeknumber_rowheader}
    >
      {formatWeekNumber(props.week.weekNumber, { locale })}
    </div>
  );
}
