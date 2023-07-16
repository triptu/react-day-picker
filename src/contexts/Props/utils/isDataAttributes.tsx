import { DayPickerBaseProps } from 'components/DayPicker';

/** Typeguard to parse the data- attributes from props. */
export function isDataAttributes(attrs: DayPickerBaseProps): attrs is {
  [key: string]: string | boolean | number | undefined;
} {
  return true;
}
