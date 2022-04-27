import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: String;
}

function ButtonComponent(props: ButtonProps) {
  const { title, ...touchableOpacityProps } = props;
  return (
    <TouchableOpacity {...touchableOpacityProps}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export const Button = React.memo(ButtonComponent);
