import type { ButtonTheme } from '../theme.types';
import { Colors } from '../colors';

export const buttonTheme: ButtonTheme = {
  primary: {
    background: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.ink.dark,
    },
    border: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.ink.dark,
    },
    text: {
      default: Colors.sky.white,
      pressed: Colors.sky.white,
      disabled: Colors.ink.light,
    },
  },
  secondary: {
    background: {
      default: Colors.primary.lighter,
      pressed: Colors.primary.light,
      disabled: Colors.ink.dark,
    },
    border: {
      default: Colors.primary.lighter,
      pressed: Colors.primary.light,
      disabled: Colors.ink.dark,
    },
    text: {
      default: Colors.primary.dark,
      pressed: Colors.primary.dark,
      disabled: Colors.ink.light,
    },
  },
  transparent: {
    background: {
      default: Colors.common.transparent,
      pressed: Colors.primary.lighter,
      disabled: Colors.common.transparent,
    },
    border: {
      default: Colors.common.transparent,
      pressed: Colors.primary.lighter,
      disabled: Colors.common.transparent,
    },
    text: {
      default: Colors.primary.light,
      pressed: Colors.primary.base,
      disabled: Colors.ink.base,
    },
  },
  outline: {
    background: {
      default: Colors.common.transparent,
      pressed: Colors.common.transparent,
      disabled: Colors.common.transparent,
    },
    border: {
      default: Colors.primary.light,
      pressed: Colors.primary.base,
      disabled: Colors.ink.base,
    },
    text: {
      default: Colors.primary.light,
      pressed: Colors.primary.base,
      disabled: Colors.ink.base,
    },
  },
};
