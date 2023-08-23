import React from 'react';

import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <strong>React DayPicker</strong>,
  docsRepositoryBase: 'https://github.com/gpbl/react-day-picker/docs/pages',
  // primaryHue: 43,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – React DayPicker',
      openGraph: {
        images: [{ url: `/img/og-image.png` }],
        siteName: 'React DayPicker'
      }
    };
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  project: {
    link: 'https://github.com/gpbl/react-day-picker'
  }
};

export default config;
