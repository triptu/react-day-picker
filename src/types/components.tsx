import { DaysSelectionMode } from 'DayPicker';

import { MonthGridProps } from 'components/MonthGrid';

/**
 * Map of the components that can be changed using the `components` prop.
 */
export interface CustomComponents<TMode extends DaysSelectionMode> {
  /** The component for the month grid element. */
  MonthGrid?: (props: MonthGridProps<TMode>) => JSX.Element | null;
}
