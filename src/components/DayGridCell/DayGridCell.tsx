import React from 'react';

import { DayPickerDay } from 'contexts/CalendarContext';
import { MatchingModifiers } from 'types/modifiers';

export interface DayGridCellProps extends React.PropsWithChildren {
  day: DayPickerDay;
  state: MatchingModifiers;
  htmlAttributes: React.HTMLAttributes<HTMLDivElement>;
}

/** Render the gridcell with the Day. */
export function DayGridCell(props: DayGridCellProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, htmlAttributes } = props;
  return <div {...htmlAttributes}>{children}</div>;
}
