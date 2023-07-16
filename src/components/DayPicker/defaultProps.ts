import { DayPickerBaseProps } from './DayPicker';

export type DefaultProps = Required<Pick<DayPickerBaseProps, 'numberOfMonths'>>;

/** The default props for the DayPicker component. */
export const defaultProps: DefaultProps = {
  numberOfMonths: 1
};
