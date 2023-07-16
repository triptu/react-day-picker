import React from 'react';

import { MonthGridInternal } from 'components/MonthGrid/MonthGridInternal';
// import { MonthGridInternal } from 'components/MonthGrid/MonthGridInternal';
import { useCalendar } from 'contexts/CalendarContext';
import { useProps } from 'contexts/PropsContext';

/**
 * Render the container with the months according to the number of months to display.
 */
export function Root(): JSX.Element {
  const props = useProps();
  const calendar = useCalendar();

  // const dayPicker = useDayPicker();
  // const focusContext = useFocusContext();
  // const navigation = useNavigation();

  // const [hasInitialFocus, setHasInitialFocus] = useState(false);

  // // Focus the focus target when initialFocus is passed in
  // useEffect(() => {
  //   if (!props.initialFocus) return;
  //   if (!focusContext.focusTarget) return;
  //   if (hasInitialFocus) return;

  //   focusContext.focus(focusContext.focusTarget);
  //   setHasInitialFocus(true);
  // }, [
  //   props.initialFocus,
  //   hasInitialFocus,
  //   focusContext.focus,
  //   focusContext.focusTarget,
  //   focusContext
  // ]);

  // Apply classnames according to props
  const classNames = [props.classNames.root];
  if (props.className) {
    classNames.push(props.className);
  }
  if (props.numberOfMonths > 1) {
    classNames.push(props.classNames.multiple_months);
  }
  if (props.showWeekNumber) {
    classNames.push(props.classNames.with_weeknumber);
  }

  const style = {
    ...props.styles.root,
    ...props.style
  };

  return (
    <div
      className={classNames.join(' ')}
      style={style}
      dir={props.dir}
      id={props.id}
      {...props.dataAttributes}
    >
      <div className={props.classNames.months} style={props.styles.months}>
        {calendar.months.map((month, displayIndex) => (
          <MonthGridInternal
            displayIndex={displayIndex}
            month={month.date}
            weeks={month.weeks}
            mode={props.mode}
          />
        ))}
      </div>
    </div>
  );
}
