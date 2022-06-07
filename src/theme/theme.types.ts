export interface UpDownDefault {
  up: string;
  down: string;
  default: string;
}

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
  borderDefault: string;
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

export interface Theme {
  buttons: ButtonTheme;
  textField: TextFieldTheme;
  background: BackgroundTheme;
  text: TextTheme;
}
