import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { Theme } from '../../theme';
import type { ButtonBackgroundAndTextTheme, ButtonTheme } from '../../theme';
import { buttonVars } from './button.vars';
import type { ValueOf } from '../../utils';
import { TypographyPresets } from 'react-native-nucleus-ui';
import { selectStyles } from '../../utils/select-styles';

interface ButtonViewState {
  isPressed: boolean;
  isDisabled: boolean;
}

const { sizes, iconPositions } = buttonVars;

const buttonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 48,
  },

  container__size_largeOrBlock__icon_noneOrSide: {
    paddingLeft: 31,
    paddingRight: 31,
  },

  // --- CONTAINER SIZE LARGE ---
  container__size_large: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  container__size_large__icon_left: {
    paddingLeft: 15,
    paddingRight: 31,
  },

  container__size_large__icon_right: {
    paddingLeft: 31,
    paddingRight: 15,
  },

  // --- CONTAINER SIZE BLOCK ---

  container__size_block: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  container__size_block__icon_left: {
    paddingLeft: 15,
    paddingRight: 15 + 24,
  },

  container__size_block__icon_right: {
    paddingLeft: 12 + 24,
    paddingRight: 12,
  },

  // --- CONTAINER SIZE SMALL ---
  container__size_small: {
    paddingTop: 3,
    paddingBottom: 3,
  },

  container__size_small__icon_noneOrSide: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  container__size_small__icon_left: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  container__size_small_icon_right: {
    paddingLeft: 15,
    paddingRight: 7,
  },

  text: {
    ...TypographyPresets.Regular.None.Medium,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 2,
    lineHeight: undefined,
  },

  text__size_large__icon_side: {
    marginLeft: 16,
  },

  text__size_large__icon_left: {
    marginLeft: 24,
  },

  text__size_large__icon_right: {
    marginRight: 24,
  },

  text__size_block__icon_leftOrRight: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  text__size_block__icon_side: {
    marginLeft: 8,
  },

  text__size_small__icon_left: {
    marginLeft: 8,
  },

  text__size_small__icon_right: {
    marginRight: 8,
  },

  text__size_small__icon_side: {
    marginLeft: 4,
  },

  icon: {
    lineHeight: 0,
    textAlign: 'center',
  },

  icon__size_largeOrBlock: {
    fontSize: 24,
    width: 24,
  },
  icon__size_small: {
    fontSize: 16,
    width: 16,
  },
});

export function getContainerStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isDisabled: boolean;
  isPressed: boolean;
  theme: Theme;
}): StyleProp<ViewStyle> {
  let { theme, appearance, isDisabled, isPressed, size, iconPosition } =
    options;

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    {
      size,
      iconPosition,
    },
    {
      container: true,
      container__size_large: {
        size: sizes.large,
      },
      container__size_largeOrBlock__icon_noneOrSide: {
        iconPosition: [undefined, iconPositions.side],
        size: [sizes.large, sizes.block],
      },
      container__size_large__icon_right: {
        iconPosition: iconPositions.right,
        size: sizes.large,
      },
      container__size_large__icon_left: {
        iconPosition: iconPositions.left,
        size: sizes.large,
      },
      container__size_block: {
        size: sizes.block,
      },
      container__size_block__icon_left: {
        iconPosition: iconPositions.left,
        size: sizes.block,
      },
      container__size_block__icon_right: {
        iconPosition: iconPositions.right,
        size: sizes.block,
      },
      container__size_small: {
        size: sizes.small,
      },
      container__size_small__icon_noneOrSide: {
        size: sizes.small,
        iconPosition: [undefined, iconPositions.side],
      },
      container__size_small__icon_left: {
        size: sizes.small,
        iconPosition: iconPositions.left,
      },
      container__size_small_icon_right: {
        size: sizes.small,
        iconPosition: iconPositions.right,
      },
    }
  );

  const buttonTheme = getButtonBackgroundAndTextThemeByAppearance(
    theme.buttons,
    appearance
  );
  styles.push(applyColorsForContainer(buttonTheme, { isPressed, isDisabled }));

  return styles;
}

export function getTextStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, size, appearance, isDisabled, iconPosition, isPressed } =
    options;

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { size, iconPosition },
    {
      text: true,
      text__size_large__icon_side: {
        size: sizes.large,
        iconPosition: iconPositions.side,
      },
      text__size_large__icon_left: {
        size: sizes.large,
        iconPosition: iconPositions.left,
      },
      text__size_large__icon_right: {
        size: sizes.large,
        iconPosition: iconPositions.right,
      },
      text__size_block__icon_leftOrRight: {
        size: sizes.block,
        iconPosition: [iconPositions.left, iconPositions.right],
      },
      text__size_block__icon_side: {
        size: sizes.block,
        iconPosition: iconPositions.side,
      },
      text__size_small__icon_left: {
        size: sizes.small,
        iconPosition: iconPositions.left,
      },
      text__size_small__icon_right: {
        size: sizes.small,
        iconPosition: iconPositions.right,
      },
      text__size_small__icon_side: {
        size: sizes.small,
        iconPosition: iconPositions.side,
      },
    }
  );

  const buttonTheme = getButtonBackgroundAndTextThemeByAppearance(
    theme.buttons,
    appearance
  );
  styles.push(applyColorsForText(buttonTheme, { isPressed, isDisabled }));

  return styles;
}

export function getIconStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, appearance, isDisabled, iconPosition, isPressed, size } =
    options;
  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { size, iconPosition },
    {
      icon: true,
      icon__size_largeOrBlock: {
        size: [sizes.large, sizes.block],
      },
      icon__size_small: {
        size: sizes.small,
      },
    }
  );

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
