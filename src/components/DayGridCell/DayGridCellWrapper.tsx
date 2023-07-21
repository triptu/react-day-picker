import React from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { DayPickerDay } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';
import { DayState } from 'types/modifiers';

import { DayGridCell as _DayGridCell } from './DayGridCell';
import { isInternalModifier } from './utils/isInternalModifier';
import { dateMatchModifiers } from './utils/isMatch';

export interface DayGridCellWrapperProps
  extends Pick<React.AriaAttributes, 'aria-colindex'> {
  day: DayPickerDay;
}

/**
 * Provides a {@link DayGridCell} the day state and the html attributes.
 * Developers may use a `DayGridCell` component without the need to use hooks.
 */
export function DayGridCellWrapper(
  props: DayGridCellWrapperProps
): JSX.Element {
  const { displayMonth, date } = props.day;
  const {
    mode,
    styles,
    classNames,
    showOutsideDays,
    today,
    components,
    disabled,
    hidden,
    modifiers,
    modifiersClassNames,
    modifiersStyles,
    onDayClick
  } = useDayPicker();

  const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
  const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));
  const isHidden =
    Boolean(hidden && dateMatchModifiers(date, hidden)) ||
    (!showOutsideDays && isOutside);

  const state: DayState = {
    outside: isOutside,
    disabled: isDisabled,
    hidden: isHidden,
    today: isSameDay(date, today),
    selected: dateMatchModifiers(date, modifiers.selected)
  };

  const modifierClassNames = Object.entries(state)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key]);
      } else if (isInternalModifier(key)) {
        previousValue.push(classNames[`day_${key}`]);
      }
      return previousValue;
    }, [] as string[]);

  const className = [classNames.day, ...modifierClassNames].join(' ');
  let style: React.CSSProperties = { ...styles.day };
  Object.keys(state).forEach((modifier) => {
    style = {
      ...style,
      ...modifiersStyles?.[modifier]
    };
  });

  const htmlAttributes: React.HTMLAttributes<HTMLDivElement> = {
    role: 'gridcell',
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: isDisabled,
    ['aria-selected']: state.selected,
    ['aria-hidden']: isHidden,
    tabIndex: isDisabled || mode === undefined ? -1 : 0,
    className: className,
    style: style,
    onClick: (e) => {
      onDayClick?.(props.day.date, state, e);
    }
  };

  const DayGridCell = components?.DayGridCell ?? _DayGridCell;

  return (
    <DayGridCell day={props.day} state={state} htmlAttributes={htmlAttributes}>
      {date.getDate()}
    </DayGridCell>
  );
}
