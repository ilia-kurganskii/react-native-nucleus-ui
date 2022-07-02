import { createThemedStyleSheet, Theme } from '../../theme';

export const getProgressBarStyles = createThemedStyleSheet((theme: Theme) => ({
  container: {
    position: 'relative',
    backgroundColor: theme.progressBar.background,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  bar: {
    height: 6,
    position: 'absolute',
    borderRadius: 3,
    backgroundColor: theme.progressBar.bar,
  },
}));
