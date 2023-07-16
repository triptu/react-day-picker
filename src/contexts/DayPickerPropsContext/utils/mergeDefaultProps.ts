import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DayPickerPropsWithDefaults } from 'contexts/DayPickerPropsContext';

import { defaultProps } from '../defaultProps';
import { parseFromToProps } from './parseFromToProps';

/** Merge the {@link defaultProps} with the props passed in. */
export function mergeDefaultProps<TMode extends DaysSelectionMode>(
  props: DayPickerProps<TMode>
) {
  const { fromDate, toDate } = parseFromToProps(props);

  const value: DayPickerPropsWithDefaults<TMode> = {
    ...defaultProps,
    ...props,
    // captionLayout,
    classNames: {
      ...defaultProps.classNames,
      ...props.classNames
    },
    // components: {
    //   ...defaultProps.components
    // },
    formatters: {
      ...defaultProps.formatters,
      ...props.formatters
    },
    fromDate,
    labels: {
      ...defaultProps.labels,
      ...props.labels
    },
    modifiers: {
      ...props.modifiers,
      ...defaultProps.modifiers
    },
    modifiersClassNames: {
      ...props.modifiersClassNames,
      ...defaultProps.modifiersClassNames
    },
    styles: {
      ...props.styles,
      ...defaultProps.styles
    },
    toDate
  };

  return value;
}
