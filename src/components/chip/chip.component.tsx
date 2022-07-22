import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Icon, useTheme, ValueOf } from 'react-native-nucleus-ui';
import React from 'react';

import { getContainerStyle, getIconStyle, getTextStyle } from './chip.style';
import { chipVars } from './chip.vars';

export interface ChipProps extends TouchableOpacityProps {
  selected?: boolean;
  children: string;
  icon?: ValueOf<typeof Icon.names>;
  iconPosition?: ValueOf<typeof chipVars.iconPositions>;
}

export interface ChipStatics {
  iconPositions: typeof chipVars.iconPositions;
}

function ChipComponent(props: ChipProps) {
  const {
    selected = false,
    iconPosition = chipVars.iconPositions.left,
    icon,
    children,
    onPress,
    ...viewProps
  } = props;
  const theme = useTheme();
  const containerStyle = getContainerStyle(theme, { isSelected: selected });
  const textStyle = getTextStyle(theme, { isSelected: selected });
  const iconStyle = getIconStyle(theme, { isSelected: selected, iconPosition });
  return (
    <TouchableOpacity
      {...viewProps}
      onPress={onPress}
      activeOpacity={onPress ? 0.6 : 1}
    >
      <View style={containerStyle}>
        {icon && iconPosition === chipVars.iconPositions.left ? (
          <Icon name={icon} style={iconStyle} />
        ) : null}
        <Text style={textStyle}>{children}</Text>
        {icon && iconPosition === chipVars.iconPositions.right ? (
          <Icon name={icon} style={iconStyle} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const Chip = React.memo(ChipComponent) as React.MemoExoticComponent<
  typeof ChipComponent
> &
  ChipStatics;

Chip.iconPositions = chipVars.iconPositions;

export { Chip };
