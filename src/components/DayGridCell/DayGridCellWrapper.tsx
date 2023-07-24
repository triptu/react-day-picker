import React from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { DayPickerDay } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';
import { DayState } from 'types/modifiers';

import { DayGridCell as _DayGridCell } from './DayGridCell';
import { getClassNameByDayState } from './getClassNameByDayState';
import { getStyleFromDayState } from './getStyleFromDayState';
import { dateMatchModifiers } from './utils/isMatch';

export interface DayGridCellWrapperProps
  extends Pick<React.AriaAttributes, 'aria-colindex'> {
  day: DayPickerDay;
}

function useDayState(day: DayPickerDay) {
  const { disabled, hidden, modifiers, showOutsideDays, today } =
    useDayPicker();

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
    ...dayStateFromModifiers
  };
  return dayState;
}
/**
 * Provides a {@link DayGridCell} the day state and the html attributes.
 * Developers may use a `DayGridCell` component without the need to use hooks.
 */
export function DayGridCellWrapper(
  props: DayGridCellWrapperProps
): JSX.Element {
  const {
    classNames,
    components,
    formatters: { formatDay },
    locale,
    mode,
    modifiersClassNames,
    modifiersStyles,
    onDayClick,
    styles
  } = useDayPicker();

  const dayState = useDayState(props.day);

  const className = getClassNameByDayState(
    dayState,
    modifiersClassNames,
    classNames
  );

  const style = getStyleFromDayState(dayState, modifiersStyles, styles);

  const htmlAttributes: React.HTMLAttributes<HTMLDivElement> = {
    role: 'gridcell',
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: dayState.disabled,
    ['aria-hidden']: dayState.hidden,
    ['aria-selected']: dayState.selected,
    className: className,
    style: style,
    tabIndex: dayState.disabled || mode === undefined ? -1 : 0,
    onClick: (e) => {
      onDayClick?.(props.day.date, dayState, e);
    }
  };

  const DayGridCell = components?.DayGridCell ?? _DayGridCell;

  return (
    <DayGridCell
      day={props.day}
      state={dayState}
      htmlAttributes={htmlAttributes}
    >
      {formatDay(props.day.date, { locale })}
    </DayGridCell>
  );
}
