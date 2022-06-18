import React, { useState } from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { buttonVars } from './button.vars';
import { getContainerStyle, getIconStyle, getTextStyle } from './button.style';
import { useTheme, Icon } from 'react-native-nucleus-ui';
import type { ValueOf } from '../../utils';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  fullWidth?: boolean;
  disabled?: boolean;
  appearance?: ValueOf<typeof buttonVars.appearances>;
  size?: ValueOf<typeof buttonVars.sizes>;
  icon?: ValueOf<typeof Icon.names>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  textStyle?: StyleProp<TextStyle>;
}

export interface ButtonStatics {
  appearances: typeof buttonVars.appearances;
  sizes: typeof buttonVars.sizes;
  iconPositions: typeof buttonVars.iconPositions;
}

const ButtonComponent = React.forwardRef<View, ButtonProps>((props, ref) => {
  const {
    title,
    style,
    icon,
    iconPosition = icon ? buttonVars.iconPositions.left : undefined,
    size = buttonVars.sizes.large,
    appearance = buttonVars.appearances.primary,
    disabled,
    textStyle,
    ...touchableOpacityProps
  } = props;

  const [isPressed, setPressed] = useState(false);
  const theme = useTheme();

  const buttonTextStyle = getTextStyle({
    appearance,
    theme,
    isPressed,
    size,
    iconPosition,
    isDisabled: !!disabled,
  });

  const buttonIconStyle = getIconStyle({
    appearance,
    theme,
    isPressed,
    size,
    iconPosition,
    isDisabled: !!disabled,
  });

  return (
    <Pressable
      ref={ref}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        getContainerStyle({
          size,
          appearance,
          theme,
          isPressed,
          iconPosition,
          isDisabled: !!disabled,
        }),
        style,
      ]}
      disabled={disabled}
      {...touchableOpacityProps}
    >
      {icon && iconPosition === buttonVars.iconPositions.left ? (
        <Icon name={icon} style={buttonIconStyle} />
      ) : null}

      {icon && iconPosition === buttonVars.iconPositions.side ? (
        <Icon name={icon} style={buttonIconStyle} />
      ) : null}
      <Text style={[buttonTextStyle, textStyle]}>{title}</Text>

      {icon && iconPosition === buttonVars.iconPositions.right ? (
        <Icon name={icon} style={buttonIconStyle} />
      ) : null}
    </Pressable>
  );
});

const Button = React.memo(ButtonComponent) as React.MemoExoticComponent<
  typeof ButtonComponent
> &
  ButtonStatics;

Button.appearances = buttonVars.appearances;
Button.sizes = buttonVars.sizes;

export { Button };
