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
  popover: {
    background: Colors.sky.white,
    textMessage: Colors.ink.lighter,
    textTitle: Colors.ink.darkest,
  },
  progressBar: {
    background: Colors.sky.lighter,
    bar: Colors.primary.base,
  },
  chip: {
    background: Colors.sky.lighter,
    text: Colors.ink.darkest,
    selectedBackground: Colors.primary.lightest,
    selectedText: Colors.primary.base,
  },
};
