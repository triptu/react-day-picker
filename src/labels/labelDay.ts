import { format } from 'date-fns';

import { DayLabel } from 'types/labels';

/**
 * The default ARIA label for the day button.
 */
export const labelDay: DayLabel = (day, matchingModifiers, options): string => {
  return format(day, 'do MMMM (EEEE)', options);
};
