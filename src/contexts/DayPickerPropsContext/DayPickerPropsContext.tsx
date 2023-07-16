import React, { createContext, ReactNode, useContext } from 'react';

import { DayPickerProps, DaysSelectionMode } from 'DayPicker';

import { DefaultProps } from './defaultProps';
import { mergeDefaultProps } from './utils/mergeDefaultProps';

/** A record with `data-*` attributes passed to {@link DayPicker}. */
export type DataAttributes = Record<string, unknown>;

/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerPropsWithDefaults<TMode extends DaysSelectionMode> =
  DayPickerProps<TMode> & DefaultProps;

export const DayPickerPropsContext = createContext<
  DayPickerPropsWithDefaults<DaysSelectionMode> | undefined
>(undefined);

/** The props for the {@link DayPickerProvider}. */
export interface DayPickerProviderProps<TMode extends DaysSelectionMode> {
  /** The initial props from the DayPicker component. */
  dayPickerProps: DayPickerProps<TMode>;
  children?: ReactNode;
}
/**
 * The provider for the {@link DayPickerPropsContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider<TMode extends DaysSelectionMode>(
  props: DayPickerProviderProps<TMode>
) {
  const dayPickerWithDefaultProps = mergeDefaultProps(props.dayPickerProps);

  return (
    <DayPickerPropsContext.Provider value={dayPickerWithDefaultProps}>
      {props.children}
    </DayPickerPropsContext.Provider>
  );
}

/** Use this hook in custom components to access to the props passed to DayPicker. */
export function useDayPickerProps(): DayPickerPropsWithDefaults<DaysSelectionMode> {
  const context = useContext(DayPickerPropsContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
