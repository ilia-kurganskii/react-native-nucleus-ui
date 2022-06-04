import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../theme';
import { createThemedStyleSheet } from '../../theme';
import { buttonVars } from './button.vars';
import type { ValueOf } from '../../utils';
import { TypographyPresets } from 'react-native-nucleus-ui';
import { selectStyles } from '../../utils/select-styles';

const { sizes, iconPositions, appearances } = buttonVars;

const getStyles = createThemedStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 48,
  },

  container__appearance_primary__state_default: {
    backgroundColor: theme.buttons.primary.background.default,
    borderColor: theme.buttons.primary.border.default,
  },

  container__appearance_primary__state_pressed: {
    backgroundColor: theme.buttons.primary.background.pressed,
    borderColor: theme.buttons.primary.border.pressed,
  },

  container__appearance_primary__state_disabled: {
    backgroundColor: theme.buttons.primary.background.disabled,
    borderColor: theme.buttons.primary.border.disabled,
  },

  container__appearance_outline__state_default: {
    backgroundColor: theme.buttons.outline.background.default,
    borderColor: theme.buttons.outline.border.default,
  },

  container__appearance_outline__state_pressed: {
    backgroundColor: theme.buttons.outline.background.pressed,
    borderColor: theme.buttons.outline.border.pressed,
  },

  container__appearance_outline__state_disabled: {
    backgroundColor: theme.buttons.outline.background.disabled,
    borderColor: theme.buttons.outline.border.disabled,
  },

  container__appearance_secondary__state_default: {
    backgroundColor: theme.buttons.secondary.background.default,
    borderColor: theme.buttons.secondary.border.default,
  },

  container__appearance_secondary__state_pressed: {
    backgroundColor: theme.buttons.secondary.background.pressed,
    borderColor: theme.buttons.secondary.border.pressed,
  },

  container__appearance_secondary__state_disabled: {
    backgroundColor: theme.buttons.secondary.background.disabled,
    borderColor: theme.buttons.secondary.border.disabled,
  },

  container__appearance_transparent__state_default: {
    backgroundColor: theme.buttons.transparent.background.default,
    borderColor: theme.buttons.transparent.border.default,
  },

  container__appearance_transparent__state_pressed: {
    backgroundColor: theme.buttons.transparent.background.pressed,
    borderColor: theme.buttons.transparent.border.pressed,
  },

  container__appearance_transparent__state_disabled: {
    backgroundColor: theme.buttons.transparent.background.disabled,
    borderColor: theme.buttons.transparent.border.disabled,
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

  font__appearance_primary__state_default: {
    color: theme.buttons.primary.text.default,
  },

  font__appearance_primary__state_pressed: {
    color: theme.buttons.primary.text.pressed,
  },

  font__appearance_primary__state_disabled: {
    color: theme.buttons.primary.text.disabled,
  },

  font__appearance_outline__state_default: {
    color: theme.buttons.outline.text.default,
  },

  font__appearance_outline__state_pressed: {
    color: theme.buttons.outline.text.pressed,
  },

  font__appearance_outline__state_disabled: {
    color: theme.buttons.outline.text.disabled,
  },

  font__appearance_secondary__state_default: {
    color: theme.buttons.secondary.text.default,
  },

  font__appearance_secondary__state_pressed: {
    color: theme.buttons.secondary.text.pressed,
  },

  font__appearance_secondary__state_disabled: {
    color: theme.buttons.secondary.text.disabled,
  },

  font__appearance_transparent__state_default: {
    color: theme.buttons.transparent.text.default,
  },

  font__appearance_transparent__state_pressed: {
    color: theme.buttons.transparent.text.pressed,
  },

  font__appearance_transparent__state_disabled: {
    color: theme.buttons.transparent.text.disabled,
  },
}));

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

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    {
      size,
      iconPosition,
      appearance,
      isDisabled,
      isPressed,
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

      container__appearance_outline__state_default: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_outline__state_pressed: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_outline__state_disabled: {
        appearance: appearances.outline,
        isDisabled: true,
        isPressed: false,
      },

      container__appearance_primary__state_default: {
        appearance: appearances.primary,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_primary__state_pressed: {
        appearance: appearances.primary,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_primary__state_disabled: {
        appearance: appearances.primary,
        isDisabled: true,
        isPressed: false,
      },

      container__appearance_transparent__state_default: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_transparent__state_pressed: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_transparent__state_disabled: {
        appearance: appearances.transparent,
        isDisabled: true,
        isPressed: false,
      },

      container__appearance_secondary__state_default: {
        appearance: appearances.secondary,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_secondary__state_pressed: {
        appearance: appearances.secondary,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_secondary__state_disabled: {
        appearance: appearances.secondary,
        isDisabled: true,
        isPressed: false,
      },
    }
  );

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

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { size, iconPosition, appearance, isDisabled, isPressed },
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

  const fontStyle = getFontStyle({
    appearance,
    theme,
    isPressed,
    isDisabled,
  });

  styles.push(fontStyle);

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

  const buttonStyles = getStyles(theme);

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

  const fontStyle = getFontStyle({
    appearance,
    theme,
    isPressed,
    isDisabled,
  });

  styles.push(fontStyle);

  return styles;
}

export function getFontStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, appearance, isDisabled, isPressed } = options;

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { appearance, isDisabled, isPressed },
    {
      font__appearance_outline__state_default: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_outline__state_pressed: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_outline__state_disabled: {
        appearance: appearances.outline,
        isDisabled: true,
        isPressed: false,
      },

      font__appearance_primary__state_default: {
        appearance: appearances.primary,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_primary__state_pressed: {
        appearance: appearances.primary,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_primary__state_disabled: {
        appearance: appearances.primary,
        isDisabled: true,
        isPressed: false,
      },

      font__appearance_transparent__state_default: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_transparent__state_pressed: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_transparent__state_disabled: {
        appearance: appearances.transparent,
        isDisabled: true,
        isPressed: false,
      },

      font__appearance_secondary__state_default: {
        appearance: appearances.secondary,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_secondary__state_pressed: {
        appearance: appearances.secondary,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_secondary__state_disabled: {
        appearance: appearances.secondary,
        isDisabled: true,
        isPressed: false,
      },
    }
  );

  return styles;
}
