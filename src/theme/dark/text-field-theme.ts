import type { TextFieldTheme } from '../theme.types';
import { Colors } from '../colors';

export const textFieldTheme: TextFieldTheme = {
  borderDefault: Colors.ink.dark,
  borderFocused: Colors.primary.base,
  borderError: Colors.red.base,
  textDefault: Colors.sky.white,
  textPlaceholder: Colors.ink.lighter,
  textDisabled: Colors.ink.base,
  backgroundDisabled: Colors.ink.darker,
} as const;
