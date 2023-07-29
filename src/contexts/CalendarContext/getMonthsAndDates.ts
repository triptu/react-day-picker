import { startOfDay, startOfMonth } from 'date-fns';

import { getDates } from './utils/getDates';
import { getDayPickerMonths } from './utils/getDayPickerMonths';
import { getDisplayMonths } from './utils/getDisplayMonths';

export function getMonthsAndDates(
  firstMonth: Date,
  toDate?: Date | undefined,
  options?: {
    fixedWeeks?: boolean | undefined;
    ISOWeek?: boolean;
    locale?: Locale;
    numberOfMonths?: number;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
) {
  const { numberOfMonths = 1 } = options || {};
  const firstDayOfFirstMonth = startOfMonth(startOfDay(firstMonth));
  const displayMonths = getDisplayMonths(
    firstDayOfFirstMonth,
    numberOfMonths,
    toDate
  );
  const lastMonth = displayMonths[displayMonths.length - 1];
  const dates = getDates(firstDayOfFirstMonth, lastMonth, toDate, options);
  const months = getDayPickerMonths(displayMonths, dates, options);

  return { dates, months };
}
