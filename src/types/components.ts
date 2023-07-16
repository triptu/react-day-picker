import { DaysSelectionMode } from 'DayPicker';

import { DayPickerPropsWithDefaults } from 'contexts/Props/PropsContext';

export type CustomComponentSharedProps<TMode extends DaysSelectionMode> = {
  dayPickerProps: DayPickerPropsWithDefaults<TMode>;
};
