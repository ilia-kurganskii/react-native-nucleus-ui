import type { ColorValue } from 'react-native';

interface ButtonStateColors {
  default: string;
  pressed: string;
  disabled: string;
}

export interface ButtonBackgroundAndTextTheme {
  background: ButtonStateColors;
  border: ButtonStateColors;
  text: ButtonStateColors;
}

export interface ButtonTheme {
  primary: ButtonBackgroundAndTextTheme;
  secondary: ButtonBackgroundAndTextTheme;
  outline: ButtonBackgroundAndTextTheme;
  transparent: ButtonBackgroundAndTextTheme;
}

export interface TextFieldTheme {
  borderDefault: ColorValue;
  borderFocused: string;
  borderError: string;
  textPlaceholder: string;
  textDisabled: string;
  textDefault: string;
  backgroundDisabled: string;
}

export interface BackgroundTheme {
  base: string;
}

export interface TextTheme {
  base: string;
}

export interface PageControlsTheme {
  backgroundDefault: string;
  backgroundSelected: string;
}

export interface PopoverTheme {
  background: string;
  textTitle: string;
  textMessage: string;
}

export interface ProgressBarTheme {
  background: string;
  bar: string;
}

export interface ChipTheme {
  background: string;
  text: string;
  selectedBackground: string;
  selectedText: string;
}

export interface Theme {
  type: 'dark' | 'light' | string;
  buttons: ButtonTheme;
  textField: TextFieldTheme;
  background: BackgroundTheme;
  text: TextTheme;
  pageControls: PageControlsTheme;
  popover: PopoverTheme;
  progressBar: ProgressBarTheme;
  chip: ChipTheme;
}
export interface DefaultExtendedTheme {}
export type ExtendedTheme<T = DefaultExtendedTheme> = T & Theme;
