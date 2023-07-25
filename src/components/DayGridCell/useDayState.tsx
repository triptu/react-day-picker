import { isSameDay, isSameMonth } from 'date-fns';

import { DayPickerDay } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';
import { useSelection } from 'contexts/SelectionContext';
import { DayState } from 'types/modifiers';

import { dateMatchModifiers } from './utils/isMatch';

export function useDayState(day: DayPickerDay) {
  const { disabled, hidden, modifiers, showOutsideDays, today } =
    useDayPicker();
  const selection = useSelection();

  const { date, displayMonth } = day;

  const dayStateFromModifiers = Object.keys(modifiers).reduce(
    (previousValue, modifier) => {
      const modifierValue = modifiers[modifier];
      if (modifierValue && dateMatchModifiers(date, modifierValue)) {
        previousValue[modifier] = true;
      }
      return previousValue;
    },
    {} as DayState
  );
  const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
  const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));
  const isHidden =
    Boolean(hidden && dateMatchModifiers(date, hidden)) ||
    (!showOutsideDays && isOutside);

  const dayState: DayState = {
    outside: isOutside,
    disabled: isDisabled,
    hidden: isHidden,
    today: isSameDay(date, today),
    selected: selection.isSelected(date),
    ...dayStateFromModifiers
  };
  return dayState;
}
