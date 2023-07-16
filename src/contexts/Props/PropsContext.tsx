import React, { createContext, ReactNode, useContext } from 'react';

import {
  DayPickerBaseProps,
  DayPickerProps,
  DaysSelectionMode
} from 'components/DayPicker';

import { DefaultProps } from './defaultProps';
import { isDataAttributes } from './utils/isDataAttributes';
import { mergeDefaultProps } from './utils/mergeDefaultProps';

export type DataAttributes = Record<string, unknown>;

export type DayPickerPropsWithDefaults<TMode extends DaysSelectionMode> =
  DayPickerProps<TMode> & DefaultProps;

export const PropsContext = createContext<
  DayPickerPropsWithDefaults<DaysSelectionMode> | undefined
>(undefined);

/** The props for the {@link PropsProvider}. */
export interface PropsProviderProps {
  /** The initial props from the DayPicker component. */
  dayPickerProps: DayPickerBaseProps;
  children?: ReactNode;
}
/**
 * The provider for the {@link PropsContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function PropsProvider(providerProps: PropsProviderProps) {
  const props = mergeDefaultProps(providerProps.dayPickerProps);

  const dataAttributes = Object.keys(props)
    .filter((key) => key.startsWith('data-'))
    .reduce((attrs, key: string) => {
      if (!isDataAttributes(props)) return attrs;
      return {
        ...attrs,
        [key]: props[key]
      };
    }, {});

  props.dataAttributes = dataAttributes;

  return (
    <PropsContext.Provider value={props}>
      {providerProps.children}
    </PropsContext.Provider>
  );
}

/** Use this hook in custom components to access to the props passed to DayPicker. */
export function useProps(): DayPickerPropsWithDefaults<DaysSelectionMode> {
  const context = useContext(PropsContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
