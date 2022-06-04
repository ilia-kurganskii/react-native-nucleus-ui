import type { ButtonTheme } from '../theme.types';
import { Colors } from '../colors';

export const ButtonsTheme: ButtonTheme = {
  primary: {
    background: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.light,
    },
    border: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.light,
    },
    text: {
      default: Colors.sky.white,
      pressed: Colors.sky.white,
      disabled: Colors.sky.dark,
    },
  },
  secondary: {
    background: {
      default: Colors.primary.lightest,
      pressed: Colors.primary.lighter,
      disabled: Colors.sky.light,
    },
    border: {
      default: Colors.primary.lightest,
      pressed: Colors.primary.lighter,
      disabled: Colors.sky.light,
    },
    text: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.dark,
    },
  },
  transparent: {
    background: {
      default: Colors.common.transparent,
      pressed: Colors.primary.lightest,
      disabled: Colors.common.transparent,
    },
    border: {
      default: Colors.common.transparent,
      pressed: Colors.primary.lightest,
      disabled: Colors.common.transparent,
    },
    text: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.dark,
    },
  },
  outline: {
    background: {
      default: Colors.common.transparent,
      pressed: Colors.common.transparent,
      disabled: Colors.common.transparent,
    },
    border: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.light,
    },
    text: {
      default: Colors.primary.base,
      pressed: Colors.primary.dark,
      disabled: Colors.sky.base,
    },
  },
};
