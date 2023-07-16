import React from 'react';

import { WeekdayColumnHeader as DefaultWeekdayColumnHeader } from 'components/WeekdayColumnHeader';
import { useDayPicker } from 'contexts/DayPickerContext';

import { getWeekdays } from './utils/getWeekdays';

export function WeekdaysRow() {
  const {
    styles,
    classNames,
    locale,
    weekStartsOn,
    ISOWeek,
    showWeekNumber,
    components
  } = useDayPicker();

  const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
  const WeekdayColumnHeader =
    components?.WeekdayColumnHeader ?? DefaultWeekdayColumnHeader;

  return (
    <div
      role="row"
      aria-rowindex={1}
      style={styles.weekdays_row}
      className={classNames.weekdays_row}
    >
      {showWeekNumber && <WeekdayColumnHeader aria-aria-colindex={1} />}
      {weekdays.map((weekday, i) => (
        <WeekdayColumnHeader
          key={i}
          weekday={weekday}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
        />
      ))}
    </div>
  );
}
