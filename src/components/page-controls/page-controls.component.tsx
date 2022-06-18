import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';
import React from 'react';
import { getContainerStyle, getPageItemStyle } from './page-controls.style';

export interface PageControlsProps extends ViewProps {
  count: number;
  selectedIndex: number;
}

const PageControlsComponent = React.forwardRef<View, PageControlsProps>(
  (props, ref) => {
    const theme = useTheme();
    const { count, selectedIndex, style, ...viewProps } = props;
    const containerStyle = getContainerStyle({ theme });
    return (
      <View
        ref={ref}
        style={StyleSheet.compose(containerStyle, style)}
        {...viewProps}
      >
        {new Array(count).fill(0).map((_, index) => (
          <View
            key={index}
            style={getPageItemStyle({
              theme,
              isSelected: index === selectedIndex,
              isFirst: index === 0,
            })}
          />
        ))}
      </View>
    );
  }
);

export const PageControls = React.memo(PageControlsComponent);
