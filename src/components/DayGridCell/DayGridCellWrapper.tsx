import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  TouchEventHandler
} from 'react';

import { DayPickerDay } from 'contexts/CalendarContext';
import { useDayPicker } from 'contexts/DayPickerContext';

import { DayGridCell as _DayGridCell } from './DayGridCell';
import { getClassNameByDayState } from './getClassNameByDayState';
import { getStyleFromDayState } from './getStyleFromDayState';
import { useDayState } from './useDayState';

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
  const {
    classNames,
    components,
    formatters: { formatDay },
    locale,
    mode,
    modifiersClassNames,
    modifiersStyles,
    onSelect,
    onDayBlur,
    onDayClick,
    onDayKeyDown,
    onDayKeyPress,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayPointerEnter,
    onDayPointerLeave,
    onDayTouchCancel,
    onDayTouchEnd,
    onDayTouchMove,
    onDayTouchStart,
    required,
    min,
    max,
    styles
  } = useDayPicker();

  const dayState = useDayState(props.day);

  const className = getClassNameByDayState(
    dayState,
    modifiersClassNames,
    classNames
  );

  const style = getStyleFromDayState(dayState, modifiersStyles, styles);

  const onClick: MouseEventHandler = (e) => {
    switch (mode) {
      case 'single':
        if (dayState.selected && !required) {
          onSelect?.(undefined, day, dayState, e);
          return;
        }
        onSelect?.(day, day, dayState, e);
    }

    onDayClick?.(props.day.date, dayState, e);
  };

  // const onFocus: FocusEventHandler = (e) => {
  //   focus(props.day.date);
  //   onDayFocus?.(props.day.date, dayState, e);
  // };

  const onBlur: FocusEventHandler = (e) => {
    blur();
    onDayBlur?.(props.day.date, dayState, e);
  };

  const onMouseEnter: MouseEventHandler = (e) => {
    onDayMouseEnter?.(props.day.date, dayState, e);
  };
  const onMouseLeave: MouseEventHandler = (e) => {
    onDayMouseLeave?.(props.day.date, dayState, e);
  };
  const onPointerEnter: PointerEventHandler = (e) => {
    onDayPointerEnter?.(props.day.date, dayState, e);
  };
  const onPointerLeave: PointerEventHandler = (e) => {
    onDayPointerLeave?.(props.day.date, dayState, e);
  };
  const onTouchCancel: TouchEventHandler = (e) => {
    onDayTouchCancel?.(props.day.date, dayState, e);
  };
  const onTouchEnd: TouchEventHandler = (e) => {
    onDayTouchEnd?.(props.day.date, dayState, e);
  };
  const onTouchMove: TouchEventHandler = (e) => {
    onDayTouchMove?.(props.day.date, dayState, e);
  };
  const onTouchStart: TouchEventHandler = (e) => {
    onDayTouchStart?.(props.day.date, dayState, e);
  };

  const onKeyUp: KeyboardEventHandler = (e) => {
    onDayKeyUp?.(props.day.date, dayState, e);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    onDayKeyPress?.(props.day.date, dayState, e);
  };

  const onKeyDown: KeyboardEventHandler = (e) => {
    // switch (e.key) {
    //   case 'ArrowLeft':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     dir === 'rtl' ? focusDayAfter() : focusDayBefore();
    //     break;
    //   case 'ArrowRight':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     dir === 'rtl' ? focusDayBefore() : focusDayAfter();
    //     break;
    //   case 'ArrowDown':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusWeekAfter();
    //     break;
    //   case 'ArrowUp':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusWeekBefore();
    //     break;
    //   case 'PageUp':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.shiftKey ? focusYearBefore() : focusMonthBefore();
    //     break;
    //   case 'PageDown':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.shiftKey ? focusYearAfter() : focusMonthAfter();
    //     break;
    //   case 'Home':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusStartOfWeek();
    //     break;
    //   case 'End':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusEndOfWeek();
    //     break;
    // }
    onDayKeyDown?.(props.day.date, dayState, e);
  };

  const htmlAttributes: React.HTMLAttributes<HTMLDivElement> = {
    role: 'gridcell',
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: dayState.disabled,
    ['aria-hidden']: dayState.hidden,
    ['aria-selected']: dayState.selected,
    className: className,
    style: style,
    tabIndex: dayState.disabled || mode === undefined ? -1 : 0,
    onBlur,
    onClick,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
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
