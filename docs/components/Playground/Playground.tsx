import React, { useState } from 'react';

import { Locale } from 'date-fns';
import {
  DayPicker,
  DayPickerBaseProps,
  DaysSelectionMode
} from 'react-day-picker';

import {
  DayPickerMultiProps,
  DayPickerRangeProps,
  DayPickerSingleProps
} from '../../../dist';
import { PropsForm } from './PropsForm';

export function Playground() {
  const [mode, setMode] = useState<DaysSelectionMode | undefined>();
  const [locale, setLocale] = useState<Locale>();
  const [baseProps, setBaseProps] = useState<DayPickerBaseProps>({});
  const [singleProps, setSingleProps] = useState<DayPickerSingleProps>({
    mode: 'single'
  });
  const [multiProps, setMultiProps] = useState<DayPickerMultiProps>({
    mode: 'multi'
  });
  const [rangeProps, setRangeProps] = useState<DayPickerRangeProps>({
    mode: 'range'
  });

  const handleReset = () => {
    setBaseProps({});
    setSingleProps({ mode: 'single' });
    setMultiProps({ mode: 'multi' });
    setRangeProps({ mode: 'range' });
    setMode(undefined);
  };

  return (
    <div className="md:flex">
      <div className="md:shrink-1">
        <PropsForm
          baseProps={baseProps}
          locale={locale}
          mode={mode}
          multiProps={multiProps}
          rangeProps={rangeProps}
          singleProps={singleProps}
          onModeChange={setMode}
          onLocaleChange={setLocale}
          onBasePropsChange={setBaseProps}
          onSinglePropsChange={setSingleProps}
          onMultiPropsChange={setMultiProps}
          onRangePropsChange={setRangeProps}
          onReset={handleReset}
        />
      </div>

      <div className="md:shrink-0">
        <div className="md:sticky md:nx-top-16">
          <DayPicker
            locale={locale}
            {...(mode === 'single'
              ? singleProps
              : mode === 'multi'
              ? multiProps
              : mode === 'range'
              ? rangeProps
              : baseProps)}
          />
        </div>
      </div>
    </div>
  );
}
