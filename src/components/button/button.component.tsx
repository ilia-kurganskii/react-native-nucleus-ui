import React, { ReactNode, useState } from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { buttonVars } from './button.vars';
import { getContainerStyle, getTextStyle } from './button.style';
import { useTheme } from '../../theme/theme.provider';
import type { ValueOf } from '../../utils';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  fullWidth?: boolean;
  disabled?: boolean;
  appearance?: ValueOf<typeof buttonVars.appearances>;
  size?: ValueOf<typeof buttonVars.sizes>;
  icon?: () => ReactNode;
  iconPosition?: 'left' | 'right' | 'side';
  textStyle?: StyleProp<TextStyle>;
}

export interface ButtonStatics {
  appearances: typeof buttonVars.appearances;
  sizes: typeof buttonVars.sizes;
}

function ButtonComponent(props: ButtonProps) {
  const {
    title,
    style,
    size = buttonVars.sizes.large,
    appearance = buttonVars.appearances.primary,
    disabled,
    textStyle,
    ...touchableOpacityProps
  } = props;

  const [isPressed, setPressed] = useState(false);
  const theme = useTheme();

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        getContainerStyle({
          size,
          appearance,
          theme,
          isPressed,
          isDisabled: !!disabled,
        }),
        style,
      ]}
      disabled={disabled}
      {...touchableOpacityProps}
    >
      <Text
        style={[
          getTextStyle({
            appearance,
            theme,
            isPressed,
            isDisabled: !!disabled,
          }),
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const Button = React.memo(ButtonComponent) as React.MemoExoticComponent<
  typeof ButtonComponent
> &
  ButtonStatics;

Button.appearances = buttonVars.appearances;
Button.sizes = buttonVars.sizes;

export { Button };
