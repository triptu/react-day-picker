import React from 'react';

import { render } from '@testing-library/react';
import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { ContextProviders } from 'contexts/ContextProviders';

/** Render a DayPicker hook inside the {@link RootProvider}. */
export type RenderHookResult<TResult> = {
  current: TResult;
};

export function renderDayPickerHook<TMode extends DaysSelectionMode, TResult>(
  hook: () => TResult,
  dayPickerProps: DayPickerProps<TMode>
): RenderHookResult<TResult> {
  const returnVal = { current: undefined as TResult };
  function Test(): JSX.Element {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return <></>;
  }
  if (dayPickerProps === undefined) {
    render(<Test />);
  }
  render(
    <ContextProviders dayPickerProps={dayPickerProps}>
      <Test />
    </ContextProviders>
  );
  return returnVal;
}
