type LocaleString = keyof typeof locales;
import { format, isValid, Locale, parse, startOfMonth } from 'date-fns';
import * as locales from 'date-fns/locale';
import {
  DayPickerBaseProps,
  DayPickerMultiProps,
  DayPickerRangeProps,
  DayPickerSingleProps,
  DaysSelectionMode
} from 'react-day-picker';

export interface PropsFormProps {
  mode: DaysSelectionMode | undefined;
  onModeChange: (mode: DaysSelectionMode) => void;
  locale: Locale | undefined;
  onLocaleChange: (locale: Locale) => void;
  baseProps: DayPickerBaseProps;
  onBasePropsChange: (baseProps: DayPickerBaseProps) => void;
  singleProps: DayPickerSingleProps;
  onSinglePropsChange: (singleProps: DayPickerSingleProps) => void;
  multiProps: DayPickerMultiProps;
  onMultiPropsChange: (multiProps: DayPickerMultiProps) => void;
  rangeProps: DayPickerRangeProps;
  onRangePropsChange: (rangeProps: DayPickerRangeProps) => void;
  onReset: () => void;
}

export function PropsForm(props: PropsFormProps) {
  const {
    mode,
    onModeChange,
    locale,
    onLocaleChange,
    baseProps,
    onBasePropsChange,
    singleProps,
    onSinglePropsChange,
    multiProps,
    onMultiPropsChange,
    rangeProps,
    onRangePropsChange,
    onReset
  } = props;
  return (
    <form>
      <button onClick={onReset}>Reset</button>
      <fieldset>
        <legend>Selection mode</legend>
        {[undefined, 'single', 'multi', 'range'].map((m, i) => {
          return (
            <label key={i}>
              <span>
                <input
                  type="radio"
                  name="mode"
                  value={m ?? ''}
                  checked={m === undefined ? mode === undefined : m === mode}
                  onChange={(e) =>
                    onModeChange(e.target.value as DaysSelectionMode)
                  }
                />
                <code>{m || 'none'}</code>
              </span>
            </label>
          );
        })}
        {mode === 'single' && (
          <label style={{ marginTop: '1em' }}>
            <code>required</code>
            <input
              type="checkbox"
              onChange={(e) =>
                onSinglePropsChange({
                  ...singleProps,
                  required: e.target.checked
                })
              }
            />
          </label>
        )}
        {(mode === 'multi' || mode === 'range') && (
          <>
            <label style={{ marginTop: '1em' }}>
              <code>min</code>
              <input
                type="number"
                min="0"
                max="99"
                value={mode === 'multi' ? multiProps?.min : rangeProps?.min}
                onChange={(e) =>
                  mode === 'multi'
                    ? onMultiPropsChange({
                        ...multiProps,
                        min:
                          Number(e.target.value) === 0
                            ? undefined
                            : Number(e.target.value)
                      })
                    : onRangePropsChange({
                        ...rangeProps,

                        min:
                          Number(e.target.value) === 0
                            ? undefined
                            : Number(e.target.value)
                      })
                }
              />
            </label>
            <label>
              <code>max</code>
              <input
                type="number"
                min="0"
                max="99"
                value={mode === 'multi' ? multiProps?.max : rangeProps?.max}
                onChange={(e) =>
                  mode === 'multi'
                    ? onMultiPropsChange({
                        ...multiProps,
                        max:
                          Number(e.target.value) === 0
                            ? undefined
                            : Number(e.target.value)
                      })
                    : onRangePropsChange({
                        ...rangeProps,
                        max:
                          Number(e.target.value) === 0
                            ? undefined
                            : Number(e.target.value)
                      })
                }
              />
            </label>
          </>
        )}
      </fieldset>
      <fieldset>
        <legend>Calendar</legend>
        <label>
          <code>defaultMonth</code>
          <input
            type="date"
            value={
              baseProps.defaultMonth
                ? format(startOfMonth(baseProps.defaultMonth), 'yyyy-MM-dd')
                : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  defaultMonth: parsed
                });
              }
            }}
          />
        </label>
        <label>
          <code>showWeekNumber</code>
          <input
            type="checkbox"
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                showWeekNumber: e.target.checked
              })
            }
          />
        </label>
        <label>
          <code>showOutsideDays</code>
          <input
            type="checkbox"
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                showOutsideDays: e.target.checked
              })
            }
          />
        </label>
        <label className={!baseProps.showOutsideDays ? 'disabled' : ''}>
          <code>─ fixedWeeks</code>
          <input
            type="checkbox"
            disabled={!baseProps.showOutsideDays}
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                fixedWeeks: e.target.checked
              })
            }
          />
        </label>
        <label>
          <code>hideWeekdayRow</code>
          <input
            type="checkbox"
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                hideWeekdayRow: e.target.checked
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
              baseProps.fromDate ? format(baseProps.fromDate, 'yyyy-MM-dd') : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
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
              baseProps.toDate ? format(baseProps.toDate, 'yyyy-MM-dd') : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  toDate: parsed
                });
              }
            }}
          />
        </label>
        <label>
          <code>disableNavigation</code>
          <input
            type="checkbox"
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                disableNavigation: e.target.checked
              })
            }
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
              onBasePropsChange({
                ...baseProps,
                numberOfMonths:
                  Number(e.target.value) === 0
                    ? undefined
                    : Number(e.target.value)
              })
            }
          />
        </label>

        <label
          className={
            baseProps.numberOfMonths !== undefined &&
            baseProps.numberOfMonths < 2
              ? 'disabled'
              : ''
          }
        >
          <code>─ pagedNavigation</code>
          <input
            type="checkbox"
            disabled={
              baseProps.numberOfMonths !== undefined &&
              baseProps.numberOfMonths < 2
            }
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                pagedNavigation: e.target.checked
              })
            }
          />
        </label>
        <label
          className={
            baseProps.numberOfMonths !== undefined &&
            baseProps.numberOfMonths < 2
              ? 'disabled'
              : ''
          }
        >
          <code>─ reverseMonths</code>
          <input
            disabled={
              baseProps.numberOfMonths !== undefined &&
              baseProps.numberOfMonths < 2
            }
            type="checkbox"
            onChange={(e) =>
              onBasePropsChange({
                ...baseProps,
                reverseMonths: e.target.checked
              })
            }
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Modifiers</legend>

        <label>
          <code>selected</code>
          <input
            type="date"
            value={
              baseProps.selected && baseProps.selected instanceof Date
                ? format(baseProps.selected, 'yyyy-MM-dd')
                : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  selected: parsed
                });
              }
            }}
          />
        </label>
        <label>
          <code>disabled</code>
          <input
            type="date"
            value={
              baseProps.disabled && baseProps.disabled instanceof Date
                ? format(baseProps.disabled, 'yyyy-MM-dd')
                : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  disabled: parsed
                });
              }
            }}
          />
        </label>
        <label>
          <code>hidden</code>
          <input
            type="date"
            value={
              baseProps.hidden && baseProps.hidden instanceof Date
                ? format(baseProps.hidden, 'yyyy-MM-dd')
                : ''
            }
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  hidden: parsed
                });
              }
            }}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Localization</legend>
        <label>
          <code>locale</code>
          <select
            value={locale?.code}
            onChange={(e) =>
              // eslint-disable-next-line import/namespace
              onLocaleChange(locales[e.target.value as LocaleString])
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
              onBasePropsChange({
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
              onBasePropsChange({
                ...baseProps,
                ISOWeek: e.target.checked
              })
            }
          />
        </label>
        <label className={baseProps.ISOWeek ? 'disabled' : ''}>
          <code>weekStartsOn</code>
          <select
            disabled={baseProps.ISOWeek}
            onChange={(e) =>
              onBasePropsChange({
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
        <label className={baseProps.ISOWeek ? 'disabled' : ''}>
          <code>firstWeekContainsDate</code>
          <select
            disabled={baseProps.ISOWeek}
            onChange={(e) =>
              onBasePropsChange({
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
            value={baseProps.today ? format(baseProps.today, 'yyyy-MM-dd') : ''}
            onChange={(e) => {
              const parsed = parse(e.target.value, 'yyyy-MM-dd', new Date());
              if (isValid(parsed)) {
                onBasePropsChange({
                  ...baseProps,
                  today: parsed
                });
              }
            }}
          />
        </label>
      </fieldset>
    </form>
  );
}
