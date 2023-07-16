import React, { useEffect, useState } from 'react';

import { DayPickerProps, DaySelectionMode } from 'components/DayPicker';

function isDataAttributes(attrs: DayPickerProps<unknown>): attrs is {
  [key: string]: string | boolean | number | undefined;
} {
  return true;
}

export interface RootProps<TMode extends DaySelectionMode> {
  dayPickerProps: DayPickerProps<TMode>;
}

/** Render the container with the months according to the number of months to display. */
export function Root<TMode extends DaySelectionMode>({
  dayPickerProps
}: RootProps<TMode>): JSX.Element {
  const { classNames } = dayPickerProps;
  // const dayPicker = useDayPicker();
  // const focusContext = useFocusContext();
  // const navigation = useNavigation();

  // const [hasInitialFocus, setHasInitialFocus] = useState(false);

  // // Focus the focus target when initialFocus is passed in
  // useEffect(() => {
  //   if (!dayPickerProps.initialFocus) return;
  //   if (!focusContext.focusTarget) return;
  //   if (hasInitialFocus) return;

  //   focusContext.focus(focusContext.focusTarget);
  //   setHasInitialFocus(true);
  // }, [
  //   dayPickerProps.initialFocus,
  //   hasInitialFocus,
  //   focusContext.focus,
  //   focusContext.focusTarget,
  //   focusContext
  // ]);

  // Apply classnames according to props
  const classNames = [dayPickerProps.classNames.root, dayPickerProps.className];
  if (dayPickerProps.numberOfMonths > 1) {
    classNames.push(dayPickerProps.classNames.multiple_months);
  }
  if (dayPickerProps.showWeekNumber) {
    classNames.push(dayPickerProps.classNames.with_weeknumber);
  }

  const style = {
    ...dayPickerProps.styles.root,
    ...dayPickerProps.style
  };

  const dataAttributes = Object.keys(initialProps)
    .filter((key) => key.startsWith('data-'))
    .reduce((attrs, key) => {
      if (!isDataAttributes(initialProps)) return attrs;
      return {
        ...attrs,
        [key]: initialProps[key]
      };
    }, {});

  return (
    <div
      className={classNames.join(' ')}
      style={style}
      dir={dayPickerProps.dir}
      id={dayPickerProps.id}
      {...dataAttributes}
    >
      <div
        className={dayPickerProps.classNames.months}
        style={dayPickerProps.styles.months}
      >
        {navigation.displayMonths.map((month, i) => (
          <Month key={i} displayIndex={i} displayMonth={month} />
        ))}
      </div>
    </div>
  );
}
