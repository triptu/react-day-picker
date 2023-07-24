import React from 'react';

import { useDayPicker } from 'contexts/DayPickerContext';

export interface WeekdayColumnHeaderProps
  extends Pick<React.AriaAttributes, 'aria-colindex'> {
  weekday?: Date;
}
/** Render the column header with the weekday name (e.g. "Mo", "Tu", etc.) */
export function WeekdayColumnHeader(props: WeekdayColumnHeaderProps) {
  const {
    classNames,
    formatters: { formatWeekdayName },
    labels: { labelWeekday },
    locale,
    styles
  } = useDayPicker();
  return (
    <span
      role={props.weekday ? 'columnheader' : 'presentation'}
      aria-colindex={props['aria-colindex']}
      aria-label={
        props.weekday ? labelWeekday(props.weekday, { locale }) : undefined
      }
      className={classNames.weekday_columnheader}
      style={styles.weekday_columnheader}
    >
      {props.weekday && formatWeekdayName(props.weekday, { locale })}
    </span>
  );
}
