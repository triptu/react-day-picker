import React from 'react';

import { DaysSelectionMode } from 'DayPicker';

import { DayPickerCalendar, useCalendar } from 'contexts/CalendarContext';
import {
  DayPickerPropsWithDefaults,
  useProps
} from 'contexts/DayPickerPropsContext';

export type DecoratedProps<TMode extends DaysSelectionMode> = {
  /** The props passed to DayPicker. */
  dayPickerProps: DayPickerPropsWithDefaults<TMode>;
  /** The calendar from the context. */
  calendar: DayPickerCalendar;
};

/**
 * Render a {@link MonthGridProps} using the hooks.
 *
 * @internal
 */

export function DecorateComponent<TProps>(
  props: { component: React.ComponentType<TProps> } & TProps
): JSX.Element {
  const Component = props.component;
  const dayPickerProps = useProps();
  const calendar = useCalendar();
  return (
    <Component {...props} calendar={calendar} dayPickerProps={dayPickerProps} />
  );
}
