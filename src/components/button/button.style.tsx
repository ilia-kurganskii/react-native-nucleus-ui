import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../theme';
import {
  ButtonBackgroundAndTextTheme,
  ButtonTheme,
  createThemedStyleSheet,
} from '../../theme';
import { buttonVars } from './button.vars';
import type { ValueOf } from '../../utils';
import { TypographyPresets } from 'react-native-nucleus-ui';

interface ButtonViewState {
  isPressed: boolean;
  isDisabled: boolean;
}

const getStyles = createThemedStyleSheet(() => ({
  button__container: {
    flexDirection: 'column',
    borderWidth: 1,
    padding: 15,
    borderRadius: 48,
  },
  button__container_size_large: {
    flex: 1,
  },
  button__text: {
    ...TypographyPresets.Regular.None.Medium,
  },
}));

export function getContainerStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  isDisabled: boolean;
  isPressed: boolean;
  theme: Theme;
}): StyleProp<ViewStyle> {
  let { theme, appearance, isDisabled, isPressed } = options;
  const buttonStyles = getStyles(theme);

  const styles: StyleProp<ViewStyle> = [buttonStyles.button__container];
  const buttonTheme = getButtonBackgroundAndTextThemeByAppearance(
    theme.buttons,
    appearance
  );
  styles.push(applyColorsForContainer(buttonTheme, { isPressed, isDisabled }));

  return styles;
}

export function getTextStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, appearance, isDisabled, isPressed } = options;
  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = [buttonStyles.button__text];

  const buttonTheme = getButtonBackgroundAndTextThemeByAppearance(
    theme.buttons,
    appearance
  );
  styles.push(applyColorsForText(buttonTheme, { isPressed, isDisabled }));

  return styles;
}

function getButtonBackgroundAndTextThemeByAppearance(
  buttonTheme: ButtonTheme,
  appearance: ValueOf<typeof buttonVars.appearances>
): ButtonBackgroundAndTextTheme {
  switch (appearance) {
    case buttonVars.appearances.primary:
      return buttonTheme.primary;
    case buttonVars.appearances.transparent:
      return buttonTheme.transparent;
    case buttonVars.appearances.secondary:
      return buttonTheme.secondary;
    case buttonVars.appearances.outline:
      return buttonTheme.outline;
    default:
      return buttonTheme.primary;
  }
}

export function applyColorsForContainer(
  theme: ButtonBackgroundAndTextTheme,
  options: ButtonViewState
): StyleProp<ViewStyle> {
  let { isDisabled, isPressed } = options;

  if (isDisabled) {
    return {
      borderColor: theme.border.disabled,
      backgroundColor: theme.background.disabled,
    };
  } else if (isPressed) {
    return {
      borderColor: theme.border.pressed,
      backgroundColor: theme.background.pressed,
    };
  }
  return {
    borderColor: theme.border.default,
    backgroundColor: theme.background.default,
  };
}

export function applyColorsForIcon(
  theme: ButtonBackgroundAndTextTheme,
  options: ButtonViewState
): StyleProp<TextStyle> {
  return applyColorsForText(theme, options);
}

export function applyColorsForText(
  theme: ButtonBackgroundAndTextTheme,
  options: ButtonViewState
): StyleProp<TextStyle> {
  if (options.isDisabled) {
    return {
      color: theme.text.disabled,
    };
  } else if (options.isPressed) {
    return {
      color: theme.text.pressed,
    };
  }
  return {
    color: theme.text.default,
  };
}
