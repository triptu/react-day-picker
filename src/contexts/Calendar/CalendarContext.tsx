import React, { createContext, ReactNode, useContext } from 'react';

import { addMonths, isBefore, isSameMonth, startOfMonth } from 'date-fns';

import { DayPickerCalendar } from 'contexts/Calendar';
import { useProps } from 'contexts/Props';
import { defaultProps } from 'contexts/Props/defaultProps';
import { useControlledValue } from 'hooks/useControlledValue';

import { getCalendar } from './getCalendar';
import { getFirstLastMonths } from './utils/getFirstLastMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

export const CalendarContext = createContext<DayPickerCalendar | undefined>(
  undefined
);

/**
 * The provider for the {@link CalendarContext}, storing the calendar state.
 */
export function CalendarProvider(providerProps: { children?: ReactNode }) {
  const props = useProps();
  const { numberOfMonths = defaultProps.numberOfMonths } = props;
  const [firstMonth, lastMonth] = getFirstLastMonths(props);
  const [currentMonth, setMonth] = useControlledValue(firstMonth, props.month);
  const goToMonth = (date: Date) => {
    if (props.disableNavigation) return;
    const month = startOfMonth(date);
    setMonth(month);
    props.onMonthChange?.(month);
  };

  const calendar = getCalendar(currentMonth, lastMonth, {
    numberOfMonths: props.numberOfMonths,
    ISOWeek: props.ISOWeek,
    locale: props.locale,
    weekStartsOn: props.weekStartsOn
  });

  const nextMonth = getNextMonth(currentMonth, props);
  const previousMonth = getPreviousMonth(currentMonth, props);

  const isDateDisplayed = (date: Date) => {
    return calendar.months.some((dayPickerMonth) =>
      isSameMonth(date, dayPickerMonth.date)
    );
  };

  const goToDate = (date: Date, refDate?: Date) => {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      const month = addMonths(date, 1 + numberOfMonths * -1);
      goToMonth(month);
    } else {
      goToMonth(date);
    }
  };

  const dayPickerCalendar: DayPickerCalendar = {
    ...calendar,
    goToMonth,
    goToDate,
    currentMonth,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };
  return (
    <CalendarContext.Provider value={dayPickerCalendar}>
      {providerProps.children}
    </CalendarContext.Provider>
  );
}

/**
 * Return the {@link DayPickerCalendar} to access and navigate the calendar used in DayPicker.
 */
export function useCalendar(): DayPickerCalendar {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
}
