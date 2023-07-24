import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DayPickerContext } from 'contexts/DayPickerContext';

import { DataAttributes, defaultProps } from '../defaultProps';
import { parseFromToProps } from './parseFromToProps';

/** Merge the {@link defaultProps} with the props passed in. */
export function mergeDefaultProps<TMode extends DaysSelectionMode>(
  props: DayPickerProps,
  mode: DaysSelectionMode
) {
  const { fromDate, toDate } = parseFromToProps(props);

  const dataAttributes: DataAttributes = {};
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith('data-')) {
      dataAttributes[key] = val;
    }
  });

  const value: DayPickerContext<TMode> = {
    ...defaultProps,
    ...props,
    mode,
    // captionLayout,
    classNames: {
      ...defaultProps.classNames,
      ...props.classNames
    },
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
      ...defaultProps.modifiers,
      ...(props.selected ? { selected: props.selected } : {})
    },
    modifiersClassNames: {
      ...props.modifiersClassNames,
      ...defaultProps.modifiersClassNames
    },
    styles: {
      ...props.styles,
      ...defaultProps.styles
    },
    toDate,
    dataAttributes
  };

  return value;
}
