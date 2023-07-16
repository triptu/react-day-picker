import React, { createContext, ReactNode, useContext } from 'react';

import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DefaultProps } from './defaultProps';
import { mergeDefaultProps } from './utils/mergeDefaultProps';

/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext<TMode extends DaysSelectionMode> =
  DayPickerProps<TMode> & DefaultProps;

export const dayPickerContext = createContext<
  DayPickerContext<DaysSelectionMode> | undefined
>(undefined);

/** The props for the {@link DayPickerProvider}. */
export interface DayPickerProviderProps<TMode extends DaysSelectionMode> {
  /** The initial props from the DayPicker component. */
  dayPickerProps: DayPickerProps<TMode>;
  children?: ReactNode;
}
/**
 * The provider for the {@link dayPickerContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider<TMode extends DaysSelectionMode>(
  props: DayPickerProviderProps<TMode>
) {
  const context = mergeDefaultProps(props.dayPickerProps);

  return (
    <dayPickerContext.Provider value={context}>
      {props.children}
    </dayPickerContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components. */
export function useDayPicker(): DayPickerContext<DaysSelectionMode> {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
