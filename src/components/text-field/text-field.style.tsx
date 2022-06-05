import { createThemedStyleSheet, Theme } from '../../theme';
import { selectStyles } from '../../utils/select-styles';
import { TypographyPresets } from '../../typography';

export const getTextFieldStyles = createThemedStyleSheet((theme) => ({
  container: {
    ...TypographyPresets.Regular.None.Regular,
    lineHeight: undefined,
    borderRadius: 8,
  },
  container__state_default: {
    padding: 15,
    borderWidth: 1,
    color: theme.textField.textDefault,
    borderColor: theme.textField.borderDefault,
  },
  container__state_focused: {
    padding: 14,
    borderWidth: 2,
    color: theme.textField.textDefault,
    borderColor: theme.textField.borderFocused,
  },
  container__state_error: {
    padding: 14,
    borderWidth: 2,
    color: theme.textField.textDefault,
    borderColor: theme.textField.borderError,
  },
  container__state_disabled: {
    padding: 16,
    color: theme.textField.textDisabled,
    backgroundColor: theme.textField.backgroundDisabled,
  },
}));

export function getContainerStyle(options: {
  theme: Theme;
  isDisabled: boolean;
  isError: boolean;
  isFocused: boolean;
}) {
  let { isError, isFocused, isDisabled, theme } = options;
  const textFieldStyles = getTextFieldStyles(theme);
  return selectStyles(
    textFieldStyles,
    {
      isError,
      isFocused,
      isDisabled,
    },
    {
      container: true,
      container__state_default: {
        isError: false,
        isFocused: false,
        isDisabled: false,
      },
      container__state_focused: {
        isFocused: true,
        isDisabled: false,
      },
      container__state_error: {
        isError: true,
        isFocused: false,
        isDisabled: false,
      },
      container__state_disabled: {
        isDisabled: true,
      },
    }
  );
}
