import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons-theme';
import { textFieldTheme } from './text-field-theme';
import { Colors } from '../colors';

export let DARK_THEME: Theme = {
  type: 'dark',
  buttons: buttonTheme,
  textField: textFieldTheme,
  background: {
    base: Colors.ink.darkest,
  },
  text: {
    base: Colors.sky.white,
  },
  pageControls: {
    backgroundDefault: Colors.ink.light,
    backgroundSelected: Colors.sky.white,
  },
  popover: {
    background: Colors.ink.darker,
    textMessage: Colors.sky.dark,
    textTitle: Colors.sky.white,
  },
  progressBar: {
    background: Colors.ink.darker,
    bar: Colors.primary.base,
  },
  chip: {
    background: Colors.ink.dark,
    text: Colors.sky.white,
    selectedBackground: Colors.primary.base,
    selectedText: Colors.sky.white,
  },
};
