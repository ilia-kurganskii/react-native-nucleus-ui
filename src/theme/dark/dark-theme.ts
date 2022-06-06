import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons-theme';
import { textFieldTheme } from './text-field-theme';

export let DARK_THEME: Theme = {
  buttons: buttonTheme,
  textField: textFieldTheme,
} as Theme;
