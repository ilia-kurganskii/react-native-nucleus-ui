import {
  createThemedStyleSheet,
  TypographyPresets,
} from 'react-native-nucleus-ui';

export const getPopoverStyles = createThemedStyleSheet((theme) => ({
  container: {
    padding: 24,
    backgroundColor: theme.popover.background,
    width: '100%',
    maxWidth: 330,
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    ...TypographyPresets.Title3,
    color: theme.popover.textTitle,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    ...TypographyPresets.Regular.Normal.Regular,
    color: theme.popover.textMessage,
    marginBottom: 8,
  },
  actionButton: {
    marginTop: 24,
  },
  cancelButton: {
    marginTop: 8,
  },
}));
