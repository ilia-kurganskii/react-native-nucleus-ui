import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons-theme';
import { textFieldTheme } from './text-field-theme';
import { Colors } from '../colors';

export let LIGHT_THEME: Theme = {
  type: 'light',
  buttons: buttonTheme,
  textField: textFieldTheme,
  background: {
    base: Colors.sky.white,
  },
  text: {
    base: Colors.ink.darkest,
  },
  pageControls: {
    backgroundDefault: Colors.sky.light,
    backgroundSelected: Colors.primary.base,
  },
};
