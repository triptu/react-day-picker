import React from 'react';

import { format, isDate, isValid, Locale, parse, startOfMonth } from 'date-fns';
import * as locales from 'date-fns/locale';
import {
  DayPicker,
  DayPickerBaseProps,
  DaysSelectionMode,
  defaultProps
} from 'react-day-picker';

import './playground.css';

export default function Example() {
  const [mode, setMode] = React.useState<DaysSelectionMode>();
  const [locale, setLocale] = React.useState<Locale>();

  const [baseProps, setBaseProps] =
    React.useState<DayPickerBaseProps>(defaultProps);
  const [selected, setSelected] = React.useState<Date>();

  return (
    <div className="playground">
      <form>
        <fieldset>
          <legend>Selection mode</legend>
          <input type="radio" name="mode" value="none" />
          none
          <input type="radio" name="mode" value="single" />
          single
          <input type="radio" name="mode" value="multi" />
          multi
          <input type="radio" name="mode" value="range" />
          range
        </fieldset>
        <fieldset>
          <legend>Calendar</legend>
          <label>
            <code>defaultMonth</code>
            <input
              type="date"
              value={
                isDate(baseProps.defaultMonth)
                  ? format(startOfMonth(baseProps.defaultMonth), 'yyyy-MM-dd')
                  : ''
              }
              onChange={(e) => {
                const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
                if (isValid(parsed)) {
                  setBaseProps({
                    ...baseProps,
                    defaultMonth: parsed
                  });
                }
              }}
            />
          </label>

          <label>
            <code>fixedWeeks</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  fixedWeeks: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>hideHead</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  hideHead: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>showOutsideDays</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  showOutsideDays: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>showWeekNumber</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  showWeekNumber: e.target.checked
                })
              }
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Navigation</legend>
          <label>
            <code>fromDate</code>
            <input
              type="date"
              value={
                isDate(baseProps.fromDate)
                  ? format(baseProps.fromDate, 'yyyy-MM-dd')
                  : ''
              }
              onChange={(e) => {
                const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
                if (isValid(parsed)) {
                  setBaseProps({
                    ...baseProps,
                    fromDate: parsed
                  });
                }
              }}
            />
          </label>
          <label>
            <code>toDate</code>
            <input
              type="date"
              value={
                isDate(baseProps.toDate)
                  ? format(baseProps.toDate, 'yyyy-MM-dd')
                  : ''
              }
              onChange={(e) => {
                const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
                if (isValid(parsed)) {
                  setBaseProps({
                    ...baseProps,
                    toDate: parsed
                  });
                }
              }}
            />
          </label>
          <label>
            <code>numberOfMonths</code>
            <input
              type="number"
              min="1"
              max="24"
              value={baseProps.numberOfMonths || ''}
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  numberOfMonths: Number(e.target.value)
                })
              }
            />
          </label>
          <label>
            <code>disableNavigation</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  disableNavigation: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>pagedNavigation</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  pagedNavigation: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>reverseMonths</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  reverseMonths: e.target.checked
                })
              }
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Modifiers</legend>
          {['selected', 'disabled', 'hidden'].map((modifier) => {
            return (
              <label>
                <code>{modifier}</code>
                <input
                  type="date"
                  value={
                    isDate(baseProps[modifier])
                      ? format(baseProps[modifier], 'yyyy-MM-dd')
                      : ''
                  }
                  onChange={(e) => {
                    const parsed = parse(
                      e.target.value,
                      'yyyy-MM-dd',
                      new Date()
                    );
                    if (isValid(parsed)) {
                      setBaseProps({
                        ...baseProps,
                        [modifier]: parsed
                      });
                    }
                  }}
                />
              </label>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Localization</legend>
          <label>
            <code>locale</code>
            <select
              onChange={(e) =>
                // eslint-disable-next-line import/namespace
                setBaseProps({ ...baseProps, locale: locales[e.target.value] })
              }
            >
              <option></option>
              {Object.keys(locales).map((locale) => {
                return (
                  <option key={locale} value={locale}>
                    {locale}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            <code>dir</code>
            <select
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  dir: e.target.value
                })
              }
            >
              <option></option>
              <option value={'ltr'}>ltr</option>
              <option value={'rtl'}>rtl</option>
            </select>
          </label>
          <label>
            <code>ISOWeek</code>
            <input
              type="checkbox"
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  ISOWeek: e.target.checked
                })
              }
            />
          </label>
          <label>
            <code>weekStartsOn</code>
            <select
              disabled={baseProps.ISOWeek}
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  weekStartsOn: Number(
                    e.target.value
                  ) as DayPickerBaseProps['weekStartsOn']
                })
              }
            >
              <option></option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </label>
          <label>
            <code>firstWeekContainsDate</code>
            <select
              disabled={baseProps.ISOWeek}
              onChange={(e) =>
                setBaseProps({
                  ...baseProps,
                  firstWeekContainsDate: Number(
                    e.target.value
                  ) as DayPickerBaseProps['firstWeekContainsDate']
                })
              }
            >
              <option></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </label>
          <label>
            <code>today</code>
            <input
              type="date"
              value={
                isDate(baseProps.today)
                  ? format(baseProps.today, 'yyyy-MM-dd')
                  : ''
              }
              onChange={(e) => {
                const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
                if (isValid(parsed)) {
                  setBaseProps({
                    ...baseProps,
                    today: parsed
                  });
                }
              }}
            />
          </label>
        </fieldset>
      </form>
      <div className="playground-content">
        <div className="sticky">
          <DayPicker {...baseProps} mode={mode} />
        </div>
      </div>
    </div>
  );
}
