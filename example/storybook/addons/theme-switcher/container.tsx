import React, { useEffect, useState } from 'react';
import { ThemeEvents, ThemeOption } from './constants';
import { ThemeProvider } from 'react-native-nucleus-ui';
import type { AddonStore } from '@storybook/addons';
import { View } from 'react-native';

interface ContainerProps {
  initialThemeValue?: string;
  themeOptions: ThemeOption[];
  channel: ReturnType<AddonStore['getChannel']>;
  children: React.ReactNode;
}

const Container = ({
  initialThemeValue,
  themeOptions,
  channel,
  children,
}: ContainerProps) => {
  const [themeValue, setThemeValue] = useState(initialThemeValue);
  const theme = themeOptions.find((option) => option.value === themeValue)
    ?.theme!;
  useEffect(() => {
    channel.addListener(ThemeEvents.UPDATE_THEME, setThemeValue);
    return () => {
      channel.removeAllListeners(ThemeEvents.UPDATE_THEME);
    };
  }, [channel]);

  return (
    <ThemeProvider value={theme}>
      <View
        style={{
          backgroundColor: theme.background.base,
          height: '100%',
        }}
        testID="story-view"
        // @ts-ignore
        children={children}
      />
    </ThemeProvider>
  );
};

export default Container;
