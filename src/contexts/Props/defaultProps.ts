import { startOfDay } from 'date-fns';
import { enUS } from 'date-fns/locale';

import * as formatters from '../../formatters';
import * as labels from '../../labels';
import { defaultClassNames } from './defaultClassNames';

import type { DayPickerBaseProps } from 'components/DayPicker';

import type { Formatters } from 'types/formatters';
import type { Labels } from 'types/labels';

import type { DataAttributes } from './PropsContext';

export type DefaultProps = Required<
  Pick<
    DayPickerBaseProps,
    | 'classNames'
    | 'numberOfMonths'
    | 'formatters'
    // | 'captionLayout'
    | 'locale'
    | 'modifiersClassNames'
    | 'modifiers'
    | 'numberOfMonths'
    | 'styles'
    | 'today'
  >
> & {
  dataAttributes: DataAttributes;
  formatters: Required<Formatters>;
  labels: Required<Labels>;
};

/** The default props for the DayPicker component. */
export const defaultProps: DefaultProps = {
  classNames: defaultClassNames,
  numberOfMonths: 1,
  locale: enUS,
  modifiersClassNames: {},
  modifiers: {},
  styles: {},
  today: startOfDay(new Date()),
  dataAttributes: {},
  formatters,
  labels
};
