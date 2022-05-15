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

export interface Theme {
  buttons: ButtonTheme;
}
