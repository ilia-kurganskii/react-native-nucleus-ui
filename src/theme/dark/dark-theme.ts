import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons-theme';
import { textFieldTheme } from './text-field-theme';
import { Colors } from '../colors';

export let DARK_THEME: Theme = {
  buttons: buttonTheme,
  textField: textFieldTheme,
  background: {
    base: Colors.ink.darkest,
  },
  text: {
    base: Colors.sky.white,
  },
};
