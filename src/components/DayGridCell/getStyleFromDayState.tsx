import React from 'react';

import { Styles } from 'types';
import { DayState, ModifiersStyles } from 'types/modifiers';

export function getStyleFromDayState(
  dayState: DayState,
  modifiersStyles: Partial<ModifiersStyles>,
  styles: Styles
) {
  let style: React.CSSProperties = { ...styles.day };
  Object.keys(dayState).forEach((modifier) => {
    style = {
      ...style,
      ...modifiersStyles?.[modifier]
    };
  });
  return style;
}
