import type { Theme } from 'react-native-nucleus-ui';
import type { StyleProp, ViewStyle } from 'react-native';
import { createThemedStyleSheet } from 'react-native-nucleus-ui';
import { selectStyles } from '../../utils/select-styles';

const getStyles = createThemedStyleSheet((theme: Theme) => ({
  container: {
    flexDirection: 'row',
  },
  item: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  item__default: {
    backgroundColor: theme.pageControls.backgroundDefault,
  },
  item__selected: {
    backgroundColor: theme.pageControls.backgroundSelected,
  },
  item__nonFirst: {
    marginLeft: 8,
  },
}));

export function getContainerStyle(options: {
  theme: Theme;
}): StyleProp<ViewStyle> {
  const styles = getStyles(options.theme);
  return styles.container;
}

export function getPageItemStyle(options: {
  theme: Theme;
  isSelected: boolean;
  isFirst: boolean;
}): StyleProp<ViewStyle> {
  let { theme, ...params } = options;
  const styles = getStyles(theme);
  return selectStyles(styles, params, {
    item: true,
    item__selected: {
      isSelected: true,
    },
    item__default: {
      isSelected: false,
    },
    item__nonFirst: {
      isFirst: false,
    },
  });
}
