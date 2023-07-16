import { DaysSelectionMode } from 'DayPicker';

import { DayPickerCalendar } from 'contexts/CalendarContext';
import { DayPickerPropsWithDefaults } from 'contexts/PropsContext';

export type CustomComponentProps<TMode extends DaysSelectionMode> = {
  /** The props passed to DayPicker. */
  dayPickerProps: DayPickerPropsWithDefaults<TMode>;
  /** The calendar from the context. */
  calendar: DayPickerCalendar;
};
