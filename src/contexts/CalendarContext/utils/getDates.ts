import {
  addDays,
  differenceInCalendarDays,
  differenceInMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  startOfISOWeek,
  startOfWeek
} from 'date-fns';

const NrOfDaysWithFixedWeeks = 42;
/** Return all the dates to display in the calendar. */
export function getDates(
  firstMonth: Date,
  lastMonth: Date,
  toDate?: Date,
  options?: {
    fixedWeeks?: boolean | undefined;
    ISOWeek?: boolean;
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
): Date[] {
  const firstDateOfFirstWeek = options?.ISOWeek
    ? startOfISOWeek(firstMonth)
    : startOfWeek(firstMonth, options);

  const lastDateOfLastWeek = options?.ISOWeek
    ? endOfISOWeek(endOfMonth(lastMonth))
    : endOfWeek(endOfMonth(lastMonth), options);

  const daysDiff = differenceInCalendarDays(
    lastDateOfLastWeek,
    firstDateOfFirstWeek
  );

  const dates: Date[] = [];

  for (let i = 0; i <= daysDiff; i++) {
    const date = addDays(firstDateOfFirstWeek, i);
    if (toDate && date > toDate) break;
    dates.push(new Date(date));
  }
  const nOfMonths = differenceInMonths(firstMonth, lastMonth) + 1;
  if (
    options?.fixedWeeks &&
    dates.length < NrOfDaysWithFixedWeeks * nOfMonths
  ) {
    for (let i = 0; i < 7; i++) {
      const date = addDays(dates[dates.length - 1], 1);
      dates.push(new Date(date));
    }
  }
  return dates;
}
