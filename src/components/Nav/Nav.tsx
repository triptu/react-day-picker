import React from 'react';

import { useCalendar } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';

export type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';
export function Nav() {
  const { classNames, styles } = useDayPicker();
  const { goToNextMonth, goToPreviousMonth } = useCalendar();
  return (
    <nav className={classNames.nav} style={styles?.nav}>
      <button
        name="previous-month"
        className={classNames.button_previous}
        onClick={goToPreviousMonth}
      >
        Previous
      </button>
      <button
        name="next-month"
        className={classNames.button_next}
        onClick={goToNextMonth}
      >
        Next
      </button>
    </nav>
  );
}
