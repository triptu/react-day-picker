import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DayPickerPropsWithDefaults } from 'contexts/Props';

import { defaultProps } from '../defaultProps';
import { parseFromToProps } from './parseFromToProps';

export function mergeDefaultProps<TMode extends DaysSelectionMode>(
  dayPickerProps: DayPickerProps<TMode>
) {
  const { fromDate, toDate } = parseFromToProps(dayPickerProps);

  const value: DayPickerPropsWithDefaults<TMode> = {
    ...defaultProps,
    ...dayPickerProps,
    // captionLayout,
    classNames: {
      ...defaultProps.classNames,
      ...dayPickerProps.classNames
    },
    // components: {
    //   ...defaultProps.components
    // },
    formatters: {
      ...defaultProps.formatters,
      ...dayPickerProps.formatters
    },
    fromDate,
    labels: {
      ...defaultProps.labels,
      ...dayPickerProps.labels
    },
    modifiers: {
      ...dayPickerProps.modifiers,
      ...defaultProps.modifiers
    },
    modifiersClassNames: {
      ...dayPickerProps.modifiersClassNames,
      ...defaultProps.modifiersClassNames
    },
    styles: {
      ...dayPickerProps.styles,
      ...defaultProps.styles
    },
    toDate
  };

  return value;
}
