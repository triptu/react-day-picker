import React from 'react';

import { useCalendar } from 'contexts/CalendarContext';

export function Nav() {
  const { goToNextMonth, goToPreviousMonth } = useCalendar();
  return (
    <nav>
      <button onClick={goToPreviousMonth}>Previous</button>
      <button onClick={goToNextMonth}>Next</button>
    </nav>
  );
}
