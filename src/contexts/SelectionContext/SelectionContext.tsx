import React, { createContext, ReactNode, useContext, useState } from 'react';

import { isSameDay } from 'date-fns';
import { DayPickerSelectedValue } from 'DayPicker';

import { useCalendar } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';
import { dateMatchModifiers } from 'contexts/ModifiersContext/utils/dateMatchModifiers';
import { DateRange } from 'types';

import { addToRange } from './utils/addToRange';

export type SelectionContext = {
  setSingleValue: (selectedDate: Date) => DayPickerSelectedValue<'single'>;
  singleValue: DayPickerSelectedValue<'single'>;
  setMultiValue: (selectedDate: Date) => DayPickerSelectedValue<'multi'>;
  multiValue: DayPickerSelectedValue<'multi'>;
  setRangeValue: (selectedDate: Date) => DayPickerSelectedValue<'range'>;
  rangeValue: DayPickerSelectedValue<'range'>;
  isSelected: (date: Date) => boolean;
};

export const selectionContext = createContext<SelectionContext | undefined>(
  undefined
);

/**
 * The provider for the {@link selectionContext}, storing the calendar state.
 */
export function SelectionProvider(providerProps: { children?: ReactNode }) {
  const { required, min, max, selected, mode } = useDayPicker();
  const calendar = useCalendar();

  const initialSelectedDates: Date[] = selected
    ? calendar.dates.filter((date) => dateMatchModifiers(date, selected))
    : [];

  const [singleValue, setSingleValue] = useState<Date | undefined>(
    mode === 'single' ? initialSelectedDates?.[0] : undefined
  );
  const [multiValue, setMultiValue] = useState<Date[]>(initialSelectedDates);
  const [rangeValue, setRangeValue] = useState<DateRange>({
    from: initialSelectedDates?.[0],
    to: initialSelectedDates
      ? initialSelectedDates[initialSelectedDates.length]
      : undefined
  });

  const value: SelectionContext = {
    setSingleValue: (date) => {
      console.debug('setSingle', date);
      let newSingleValue: DayPickerSelectedValue<'single'>;
      if (singleValue && isSameDay(singleValue, date) && !required) {
        newSingleValue = undefined;
      } else {
        newSingleValue = date;
      }
      setSingleValue(newSingleValue);
      return newSingleValue;
    },
    singleValue: singleValue,

    setMultiValue: (date) => {
      // const isMinSelected = Boolean(
      //   matchingModifiers.selected && min && multiValue.length === min
      // );
      // if (isMinSelected) return;
      // const isMaxSelected = Boolean(
      //   !matchingModifiers.selected && max && multiValue.length === max
      // );
      // if (isMaxSelected) return;
      // const newMultiValue = [...multiValue];
      // if (matchingModifiers.selected) {
      //   const index = newMultiValue.findIndex((selectedDay) =>
      //     isSameDay(date, selectedDay)
      //   );
      //   newMultiValue.splice(index, 1);
      // } else {
      //   newMultiValue.push(date);
      // }
      // setMultiValue(newMultiValue);
      // return newMultiValue;
      return undefined;
    },
    multiValue,
    setRangeValue: (date) => {
      const newRangeValue = addToRange(date, rangeValue);
      setRangeValue(newRangeValue ?? { from: undefined, to: undefined });
      return rangeValue;
    },
    rangeValue,
    isSelected: (date) => {
      if (singleValue && isSameDay(date, singleValue)) {
        console.log('isSelected yes', date.toDateString());
        return true;
      }
      // } else if (multiValue.some((selectedDay) => isSameDay(date, selectedDay)))
      //   return true;
      // else if (rangeValue.from && rangeValue.to) {
      //   return (
      //     isSameDay(date, rangeValue.from) || isSameDay(date, rangeValue.to)
      //   );
      // }
      return false;
    }
  };

  return (
    <selectionContext.Provider value={value}>
      {providerProps.children}
    </selectionContext.Provider>
  );
}

/**
 * Use this hook to access to the dates displayed in the calendar and to navigate between months.
 */
export function useSelection(): SelectionContext {
  const context = useContext(selectionContext);
  if (!context)
    throw new Error(`useSelection must be used within a SelectionProvider.`);

  return context;
}
