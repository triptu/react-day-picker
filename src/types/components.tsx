import * as Components from 'components';

export type CustomComponents = {
  [key in keyof typeof Components]?: (typeof Components)[key];
};
