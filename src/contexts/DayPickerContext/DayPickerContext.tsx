import React, { createContext, ReactNode, useContext } from 'react';

import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DaySelectEventHandler } from 'types/events';

import { DefaultProps } from './defaultProps';
import { mergeDefaultProps } from './utils/mergeDefaultProps';

/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext<TMode extends DaysSelectionMode> = DayPickerProps &
  DefaultProps & {
    onSelect: DaySelectEventHandler<TMode>;
    mode: TMode;
  };

const initialValue: DayPickerContext<'none'> = {
  mode: 'none'
};

export const dayPickerContext = createContext({
  initialValue
});

/** The props for the {@link DayPickerProvider}. */
export interface DayPickerProviderProps {
  /** The initial props from the DayPicker component. */
  dayPickerProps: DayPickerProps;
  children: ReactNode;
}
/**
 * The provider for the {@link dayPickerContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider(props: DayPickerProviderProps) {
  const context = mergeDefaultProps(
    props.dayPickerProps,
    props.dayPickerProps.mode ?? 'none'
  );

  return (
    <dayPickerContext.Provider value={context}>
      {props.children}
    </dayPickerContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components. */
export function useDayPicker<
  TMode extends DaysSelectionMode
>(): DayPickerContext<TMode> {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
