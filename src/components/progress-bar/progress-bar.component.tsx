import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Animated, ViewProps, LayoutChangeEvent } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';
import { getProgressBarStyles } from './progress-bar.style';

export interface ProgressBarProps extends ViewProps {
  progress: number;
}

function calculateOffset(params: { width: number; progress: number }) {
  let { progress, width } = params;
  const normalizedProgress = Math.max(0, Math.min(100, progress));
  return -width + Math.round((width * normalizedProgress) / 100);
}

function ProgressBarComponent(props: ProgressBarProps) {
  const { style, progress, ...viewProps } = props;
  const [currentWidth, setWidth] = useState(0);
  const barOffsetAnimated = useRef(new Animated.Value(0)).current;

  const theme = useTheme();
  const styles = getProgressBarStyles(theme);

  const barOffset = calculateOffset({ progress, width: currentWidth });

  const setContainerWidth = useCallback(
    (event: LayoutChangeEvent) => {
      const nativeWidth = event.nativeEvent.layout.width;
      if (currentWidth === 0) {
        barOffsetAnimated.setValue(
          calculateOffset({ progress, width: nativeWidth })
        );
      }
      if (nativeWidth !== currentWidth) {
        setWidth(nativeWidth);
      }
    },
    [currentWidth, progress, barOffsetAnimated, setWidth]
  );

  useEffect(() => {
    Animated.timing(barOffsetAnimated, {
      toValue: barOffset,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [barOffset, barOffsetAnimated]);

  return (
    <View
      onLayout={setContainerWidth}
      style={[style, styles.container]}
      {...viewProps}
    >
      <Animated.View
        style={[
          styles.bar,
          {
            width: currentWidth,
            transform: [{ translateX: barOffsetAnimated }],
          },
        ]}
      />
    </View>
  );
}

export const ProgressBar = React.memo(ProgressBarComponent);
