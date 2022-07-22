import {
  createThemedStyleSheet,
  TypographyPresets,
  Theme,
  ValueOf,
} from 'react-native-nucleus-ui';
import { selectStyles } from '../../utils/select-styles';
import { chipVars } from './chip.vars';

const getChipStyle = createThemedStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_default: {
    backgroundColor: theme.chip.background,
  },
  container_selected: {
    backgroundColor: theme.chip.selectedBackground,
  },
  text: {
    ...TypographyPresets.Regular.None.Regular,
    paddingTop: 1,
  },
  text_default: {
    color: theme.chip.text,
  },
  text_selected: {
    color: theme.chip.selectedText,
  },
  icon: {
    fontSize: 16,
  },
  icon_default: {
    color: theme.chip.text,
  },
  icon_selected: {
    color: theme.chip.selectedText,
  },
  icon_left: {
    marginRight: 8,
  },
  icon_right: {
    marginLeft: 8,
  },
}));

export function getContainerStyle(
  theme: Theme,
  options: { isSelected: boolean }
) {
  const styles = getChipStyle(theme);
  return selectStyles(styles, options, {
    container: true,
    container_default: {
      isSelected: false,
    },
    container_selected: {
      isSelected: true,
    },
  });
}

export function getTextStyle(theme: Theme, options: { isSelected: boolean }) {
  const styles = getChipStyle(theme);
  return selectStyles(styles, options, {
    text: true,
    text_default: {
      isSelected: false,
    },
    text_selected: {
      isSelected: true,
    },
  });
}

export function getIconStyle(
  theme: Theme,
  options: {
    isSelected: boolean;
    iconPosition: ValueOf<typeof chipVars.iconPositions>;
  }
) {
  const styles = getChipStyle(theme);
  return selectStyles(styles, options, {
    icon: true,
    icon_default: {
      isSelected: false,
    },
    icon_selected: {
      isSelected: true,
    },
    icon_left: {
      iconPosition: chipVars.iconPositions.left,
    },
    icon_right: {
      iconPosition: chipVars.iconPositions.right,
    },
  });
}
