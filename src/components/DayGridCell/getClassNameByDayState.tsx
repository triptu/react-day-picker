import { ClassNames } from 'types';
import { DayState, ModifiersClassNames } from 'types/modifiers';

import { isInternalModifier } from './utils/isInternalModifier';

export function getClassNameByDayState(
  dayState: DayState,
  modifiersClassNames: ModifiersClassNames,
  classNames: ClassNames
) {
  const modifierClassNames = Object.entries(dayState)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key]);
      } else if (isInternalModifier(key)) {
        previousValue.push(classNames[`day_${key}`]);
      }
      return previousValue;
    }, [] as string[]);

  const className = [classNames.day, ...modifierClassNames].join(' ');
  return className;
}
