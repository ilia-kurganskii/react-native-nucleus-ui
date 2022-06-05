import type { TextInputProps } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { getContainerStyle } from './text-field.style';
import { useTheme } from '../../theme/theme.provider';
import { useExtendCallback } from '../../utils/use-extend-callback';

interface TextFieldComponentProps extends TextInputProps {
  error?: true;
}

function TextFieldComponent(props: TextFieldComponentProps) {
  const {
    style,
    editable = true,
    error,
    onFocus,
    onBlur,
    ...textInputProps
  } = props;
  const theme = useTheme();
  const [isFocused, setFocused] = useState(false);

  const setFocus = useExtendCallback(() => setFocused(true), onFocus);
  const setBlur = useExtendCallback(() => setFocused(false), onBlur);

  const textInputStyle = getContainerStyle({
    theme,
    isFocused,
    isDisabled: !editable,
    isError: !!error,
  });

  return (
    <TextInput
      placeholderTextColor={
        editable
          ? theme.textField.textPlaceholder
          : theme.textField.textDisabled
      }
      style={StyleSheet.compose(textInputStyle, style)}
      editable={editable}
      onFocus={setFocus}
      focusable={!editable}
      selectTextOnFocus={!editable}
      onBlur={setBlur}
      {...textInputProps}
    />
  );
}

export const TextField = React.memo(TextFieldComponent);
