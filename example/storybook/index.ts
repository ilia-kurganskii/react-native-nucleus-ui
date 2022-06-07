// if you use expo remove this line
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';
import { Platform } from 'react-native';
import { withThemes } from './addons/theme-switcher';
import { DARK_THEME, LIGHT_THEME } from 'react-native-nucleus-ui';
import type { ThemeOption } from './addons/theme-switcher/constants';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withThemes);

addParameters({
  themes: [
    {
      theme: LIGHT_THEME,
      value: 'light',
      name: 'Light',
    },
    {
      theme: DARK_THEME,
      value: 'dark',
      name: 'Dark',
    },
  ] as ThemeOption[],
});

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  shouldPersistSelection: true,
  tabOpen: 0,
  port: 7007,
  host: Platform.select({
    android: '10.0.2.2',
    ios: 'localhost',
  }),
});
