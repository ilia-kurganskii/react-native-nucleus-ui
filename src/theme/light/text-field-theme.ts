import type { TextFieldTheme } from '../theme.types';
import { Colors } from '../colors';

export const textFieldTheme: TextFieldTheme = {
  borderDefault: Colors.sky.light,
  borderFocused: Colors.primary.base,
  borderError: Colors.red.base,
  textDefault: Colors.ink.darkest,
  textPlaceholder: Colors.ink.lighter,
  textDisabled: Colors.sky.base,
  backgroundDisabled: Colors.sky.lighter,
} as const;
