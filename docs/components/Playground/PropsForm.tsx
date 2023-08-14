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
    <form className="my-4">
      <button
        type="button"
        className="border rounded-md px-2 text-left text-xs font-medium"
        onClick={onReset}
      >
        Reset
      </button>
      <div className="flex overflow-scroll snap-both snap-mandatory gap-8 pb-8 pr-4">
        <fieldset className="snap-start flex-shrink-0 flex flex-col gap-2">
          <legend className="font-semibold text-lg mb-2">Selection mode</legend>
          {[undefined, 'single', 'multi', 'range'].map((m, i) => {
            return (
              <label key={i} className="text-sm">
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mode"
                    value={m ?? ''}
                    checked={m === undefined ? !mode : m === mode}
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
            <label className="flex items-center gap-2 text-sm mt-3">
              <input
                type="checkbox"
                onChange={(e) =>
                  onSinglePropsChange({
                    ...singleProps,
                    required: e.target.checked
                  })
                }
              />
              <code>required</code>
            </label>
          )}
          {(mode === 'multi' || mode === 'range') && (
            <>
              <label className="text-sm flex gap-4 justify-between items-center mt-3">
                <code>min</code>
                <input
                  className="appearance-none border border-neutral-300 rounded w-full py-1 px-2"
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
              <label className="text-sm flex gap-4 justify-between items-center">
                <code>max</code>
                <input
                  className="appearance-none border border-neutral-300 rounded w-full py-1 px-2"
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
        <fieldset className="snap-center flex-shrink-0 flex flex-col gap-2">
          <legend className="font-semibold text-lg mb-2">Calendar</legend>
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>defaultMonth</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  showWeekNumber: e.target.checked
                })
              }
            />
            <code>showWeekNumber</code>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  hideWeekdayRow: e.target.checked
                })
              }
            />
            <code>hideWeekdayRow</code>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  showOutsideDays: e.target.checked
                })
              }
            />
            <code>showOutsideDays</code>
          </label>
          <label
            className={`flex items-center gap-2 text-sm${
              !baseProps.showOutsideDays ? ' text-neutral-400' : ''
            }`}
          >
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
            <code>fixedWeeks</code>
          </label>
        </fieldset>
        <fieldset className="snap-center flex-shrink-0 flex flex-col gap-2">
          <legend className="font-semibold text-lg mb-2">Navigation</legend>
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>fromDate</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
              type="date"
              value={
                baseProps.fromDate
                  ? format(baseProps.fromDate, 'yyyy-MM-dd')
                  : ''
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>toDate</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>numberOfMonths</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
            className={`flex items-center gap-2 text-sm ${
              baseProps.numberOfMonths && baseProps.numberOfMonths < 2
                ? 'text-neutral-400'
                : ''
            }`}
          >
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
            <code>pagedNavigation</code>
          </label>
          <label
            className={`flex items-center gap-2 text-sm ${
              baseProps.numberOfMonths && baseProps.numberOfMonths < 2
                ? 'text-neutral-400'
                : ''
            }`}
          >
            <input
              disabled={Boolean(
                baseProps.numberOfMonths && baseProps.numberOfMonths < 2
              )}
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  reverseMonths: e.target.checked
                })
              }
            />
            <code>reverseMonths</code>
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  disableNavigation: e.target.checked
                })
              }
            />
            <code>disableNavigation</code>
          </label>
        </fieldset>
        <fieldset className="snap-center flex-shrink-0 flex flex-col gap-2">
          <legend className="font-semibold text-lg mb-2">Modifiers</legend>

          <label className="text-sm flex gap-4 justify-between items-center">
            <code>selected</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>disabled</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>hidden</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
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
        <fieldset className="snap-end flex-shrink-0 flex flex-col gap-2">
          <legend className="font-semibold text-lg mb-2">Localization</legend>
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>locale</code>
            <select
              className="form-select appearance-none border border-neutral-300 rounded py-1 px-2 text-current"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>dir</code>
            <select
              className="form-select appearance-none border border-neutral-300 rounded py-1 px-2 text-current"
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
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) =>
                onBasePropsChange({
                  ...baseProps,
                  ISOWeek: e.target.checked
                })
              }
            />
            <code>ISOWeek</code>
          </label>
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>weekStartsOn</code>
            <select
              className="form-select appearance-none border border-neutral-300 rounded py-1 px-2 text-current"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>firstWeekContainsDate</code>
            <select
              className="form-select appearance-none border border-neutral-300 rounded py-1 px-2 text-current"
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
          <label className="text-sm flex gap-4 justify-between items-center">
            <code>today</code>
            <input
              className="appearance-none border border-neutral-300 rounded py-1 px-2"
              type="date"
              value={
                baseProps.today ? format(baseProps.today, 'yyyy-MM-dd') : ''
              }
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
      </div>
    </form>
  );
}
