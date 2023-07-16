import React from 'react';

import { DayPickerMonth } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';

export interface MonthCaptionProps {
  id: string;
  month: DayPickerMonth;
}
export function MonthCaption(props: MonthCaptionProps) {
  const {
    styles,
    classNames,
    formatters: { formatMonthCaption }
  } = useDayPicker();
  return (
    <div
      id={props.id}
      role="presentation"
      className={classNames.month_caption}
      style={styles.month_caption}
    >
      {formatMonthCaption(props.month.date)}{' '}
    </div>
  );
}
