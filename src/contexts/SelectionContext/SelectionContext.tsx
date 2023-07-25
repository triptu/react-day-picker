import React, { createContext, ReactNode, useContext, useState } from 'react';

import { isSameDay } from 'date-fns';
import { DayPickerSelectedValue } from 'DayPicker';

import { useDayPicker } from 'contexts/DayPickerContext';
import { DateRange, DayState } from 'types';

import { addToRange } from './utils/addToRange';

export type SelectionContext = {
  setSingleValue: (
    selectedDate: Date,
    state: DayState
  ) => DayPickerSelectedValue<'single'>;
  singleValue: DayPickerSelectedValue<'single'>;
  setMultiValue: (
    selectedDate: Date,
    state: DayState
  ) => DayPickerSelectedValue<'multi'>;
  multiValue: DayPickerSelectedValue<'multi'>;
  setRangeValue: (
    selectedDate: Date,
    state: DayState
  ) => DayPickerSelectedValue<'range'>;
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
  const { required, min, max } = useDayPicker();

  const [singleValue, setSingleValue] = useState<Date | undefined>();
  const [multiValue, setMultiValue] = useState<Date[]>([]);
  const [rangeValue, setRangeValue] = useState<DateRange>({
    from: undefined,
    to: undefined
  });

  const value: SelectionContext = {
    setSingleValue: (date, dayState) => {
      let newSingleValue: DayPickerSelectedValue<'single'>;
      if (dayState.selected && !required) {
        newSingleValue = undefined;
      } else {
        newSingleValue = date;
      }
      setSingleValue(newSingleValue);
      return newSingleValue;
    },
    singleValue,

    setMultiValue: (date, dayState) => {
      const isMinSelected = Boolean(
        dayState.selected && min && multiValue.length === min
      );
      if (isMinSelected) return;
      const isMaxSelected = Boolean(
        !dayState.selected && max && multiValue.length === max
      );
      if (isMaxSelected) return;
      const newMultiValue = [...multiValue];
      if (dayState.selected) {
        const index = newMultiValue.findIndex((selectedDay) =>
          isSameDay(date, selectedDay)
        );
        newMultiValue.splice(index, 1);
      } else {
        newMultiValue.push(date);
      }
      setMultiValue(newMultiValue);
      return newMultiValue;
    },
    multiValue,
    setRangeValue: (date, dayState) => {
      const newRangeValue = addToRange(date, rangeValue);
      setRangeValue(newRangeValue ?? { from: undefined, to: undefined });
      return rangeValue;
    },
    rangeValue,
    isSelected: (date) => {
      if (singleValue && isSameDay(date, singleValue)) return true;
      if (multiValue.some((selectedDay) => isSameDay(date, selectedDay)))
        return true;
      if (rangeValue.from && rangeValue.to) {
        return (
          isSameDay(date, rangeValue.from) || isSameDay(date, rangeValue.to)
        );
      }
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
