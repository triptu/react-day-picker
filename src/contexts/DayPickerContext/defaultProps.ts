import { startOfDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import * as formatters from 'formatters';
import * as labels from 'labels';

import { ClassNames } from 'types/styles';

import { defaultClassNames } from './defaultClassNames';

import type { DayPickerBaseProps } from 'DayPicker';

import type { Formatters } from 'types/formatters';
import type { Labels } from 'types/labels';

/** A record with `data-*` attributes passed to {@link DayPicker}. */
export type DataAttributes = Record<string, unknown>;

export type DefaultProps = Required<
  Pick<
    DayPickerBaseProps,
    | 'showOutsideDays'
    | 'numberOfMonths'
    | 'locale'
    | 'modifiersStyles'
    | 'modifiersClassNames'
    | 'modifiers'
    | 'numberOfMonths'
    | 'styles'
    | 'today'
  >
> & {
  dataAttributes: DataAttributes;
  classNames: Required<ClassNames>;
  formatters: Required<Formatters>;
  labels: Required<Labels>;
};

/** The default props for the DayPicker component. */
export const defaultProps: DefaultProps = {
  classNames: defaultClassNames,
  showOutsideDays: false,
  numberOfMonths: 1,
  locale: enUS,
  modifiersStyles: {},
  modifiersClassNames: {},
  modifiers: {},
  styles: {},
  today: startOfDay(new Date()),
  dataAttributes: {},
  formatters,
  labels
};
