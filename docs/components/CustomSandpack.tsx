import React from 'react';

import dayPickerStyleRaw from '!!raw-loader!../.build-sandpack/index.css';
import dayPickerDTSRaw from '!!raw-loader!../.build-sandpack/index.d.ts';
import dayPickerRaw from '!!raw-loader!../.build-sandpack/index.js';
import example from '!!raw-loader!../examples/start.tsx';
import { Sandpack } from '@codesandbox/sandpack-react';
import { sandpackDark } from '@codesandbox/sandpack-themes';
import { useTheme } from 'nextra-theme-docs';

export function CustomSandpack(props: { children: string }) {
  // const files = { '/App.tsx': props.children };

  const { theme } = useTheme();

  const getTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? sandpackDark
        : 'light';
    }

    if (theme === 'dark') return sandpackDark;

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
        '/App.tsx': example,
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
