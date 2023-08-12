import React from 'react';

import dayPickerStyleRaw from '!!raw-loader!../.build-sandpack/index.css';
import dayPickerDTSRaw from '!!raw-loader!../.build-sandpack/index.d.ts';
import dayPickerRaw from '!!raw-loader!../.build-sandpack/index.js';
import { Sandpack } from '@codesandbox/sandpack-react';
import { sandpackDark } from '@codesandbox/sandpack-themes';
import { useTheme } from 'nextra-theme-docs';

const examples = {
  '/container-attributes.tsx':
    require('!!raw-loader!../examples/container-attributes.tsx').default,
  '/controlled.tsx': require('!!raw-loader!../examples/controlled.tsx').default,
  '/custom-caption.tsx': require('!!raw-loader!../examples/custom-caption.tsx')
    .default,
  '/custom-day.tsx': require('!!raw-loader!../examples/custom-day.tsx').default,
  '/custom-disable-row.tsx':
    require('!!raw-loader!../examples/custom-disable-row.tsx').default,
  '/custom-multiple.tsx':
    require('!!raw-loader!../examples/custom-multiple.tsx').default,
  '/custom-single.tsx': require('!!raw-loader!../examples/custom-single.tsx')
    .default,
  '/date-picker-dialog.tsx':
    require('!!raw-loader!../examples/date-picker-dialog.tsx').default,
  '/default-month.tsx': require('!!raw-loader!../examples/default-month.tsx')
    .default,
  '/disabled.tsx': require('!!raw-loader!../examples/disabled.tsx').default,
  '/dropdown-buttons.tsx':
    require('!!raw-loader!../examples/dropdown-buttons.tsx').default,
  '/dropdown.tsx': require('!!raw-loader!../examples/dropdown.tsx').default,
  '/fixedweeks.tsx': require('!!raw-loader!../examples/fixedweeks.tsx').default,
  '/focus-recursive.tsx':
    require('!!raw-loader!../examples/focus-recursive.tsx').default,
  '/formatters.tsx': require('!!raw-loader!../examples/formatters.tsx').default,
  '/from-to-month.tsx': require('!!raw-loader!../examples/from-to-month.tsx')
    .default,
  '/from-to-year.tsx': require('!!raw-loader!../examples/from-to-year.tsx')
    .default,
  '/input-range.tsx': require('!!raw-loader!../examples/input-range.tsx')
    .default,
  '/input-time.tsx': require('!!raw-loader!../examples/input-time.tsx').default,
  '/keyboard.tsx': require('!!raw-loader!../examples/keyboard.tsx').default,
  '/modifiers-classnames.tsx':
    require('!!raw-loader!../examples/modifiers-classnames.tsx').default,
  '/modifiers-custom.tsx':
    require('!!raw-loader!../examples/modifiers-custom.tsx').default,
  '/modifiers-disabled.tsx':
    require('!!raw-loader!../examples/modifiers-disabled.tsx').default,
  '/modifiers-hidden.tsx':
    require('!!raw-loader!../examples/modifiers-hidden.tsx').default,
  '/modifiers-style.tsx':
    require('!!raw-loader!../examples/modifiers-style.tsx').default,
  '/modifiers-today.tsx':
    require('!!raw-loader!../examples/modifiers-today.tsx').default,
  '/multiple-min-max.tsx':
    require('!!raw-loader!../examples/multiple-min-max.tsx').default,
  '/multiple-months-paged.tsx':
    require('!!raw-loader!../examples/multiple-months-paged.tsx').default,
  '/multiple-months.tsx':
    require('!!raw-loader!../examples/multiple-months.tsx').default,
  '/multiple.tsx': require('!!raw-loader!../examples/multiple.tsx').default,
  '/numbering-system.tsx':
    require('!!raw-loader!../examples/numbering-system.tsx').default,
  '/outside-days.tsx': require('!!raw-loader!../examples/outside-days.tsx')
    .default,
  '/playground.tsx': require('!!raw-loader!../examples/playground.css'),
  '/range-min-max.tsx': require('!!raw-loader!../examples/range-min-max.tsx')
    .default,
  '/range-shift-key.tsx':
    require('!!raw-loader!../examples/range-shift-key.tsx').default,
  '/range.tsx': require('!!raw-loader!../examples/range.tsx').default,
  '/rtl.tsx': require('!!raw-loader!../examples/rtl.tsx').default,
  '/single-required.tsx':
    require('!!raw-loader!../examples/single-required.tsx').default,
  '/single.tsx': require('!!raw-loader!../examples/single.tsx').default,
  '/spanish-week-starts-on.tsx':
    require('!!raw-loader!../examples/spanish-week-starts-on.tsx').default,
  '/spanish.tsx': require('!!raw-loader!../examples/spanish.tsx').default,
  '/start.tsx': require('!!raw-loader!../examples/start.tsx').default,
  '/styling-css-modules.tsx':
    require('!!raw-loader!../examples/styling-css-modules.tsx').default,
  '/styling-css.tsx': require('!!raw-loader!../examples/styling-css.tsx')
    .default,
  '/styling-inline.tsx': require('!!raw-loader!../examples/styling-inline.tsx')
    .default,
  '/styling-modifiers.tsx':
    require('!!raw-loader!../examples/styling-modifiers.tsx').default,
  '/testcase-1567.tsx': require('!!raw-loader!../examples/testcase-1567.tsx')
    .default,
  '/typings..tsx': require('!!raw-loader!../examples/typings.d.ts'),
  '/useinput.tsx': require('!!raw-loader!../examples/useinput.tsx').default,
  '/week-iso.tsx': require('!!raw-loader!../examples/week-iso.tsx').default,
  '/weeknumber-custom.tsx':
    require('!!raw-loader!../examples/weeknumber-custom.tsx').default,
  '/weeknumber-iso.tsx': require('!!raw-loader!../examples/weeknumber-iso.tsx')
    .default,
  '/weeknumber.tsx': require('!!raw-loader!../examples/weeknumber.tsx')
};

console.log(examples);

export function CustomSandpack(props: {
  children: string;
  exampleName: keyof typeof examples;
}) {
  // const files = { '/App.tsx': props.children };

  const { theme } = useTheme();

  const getTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    if (theme === 'dark') return 'dark';

    return 'light';
  };

  return (
    <Sandpack
      theme={getTheme()}
      template="react-ts"
      customSetup={{
        dependencies: {
          'date-fns': 'latest'
        }
      }}
      files={{
        '/App.tsx': examples[props.exampleName],
        '/node_modules/react-day-picker/package.json': {
          hidden: true,
          code: JSON.stringify({
            name: 'react-day-picker',
            main: './index.js'
          })
        },
        '/node_modules/react-day-picker/index.js': {
          hidden: true,
          code: dayPickerRaw
        },
        '/node_modules/react-day-picker/index.d.ts': {
          hidden: true,
          code: dayPickerDTSRaw
        },
        '/node_modules/react-day-picker/dist/style.css': {
          hidden: true,
          code: dayPickerStyleRaw
        }
      }}
    />
  );
}
