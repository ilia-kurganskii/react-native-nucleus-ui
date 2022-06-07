import React from 'react';
import { View } from 'react-native';
import type { AddonStore } from '@storybook/addons';
import { Button } from 'react-native-nucleus-ui';
import type { API } from '@storybook/api';
import type { ThemeOption } from './constants';
import { PARAM_KEY, ThemeEvents } from './constants';

type Channel = ReturnType<AddonStore['getChannel']>;
interface BackgroundPanelProps {
  channel: Channel;
  active: boolean;
  api: API;
}

export const ThemePanel = ({ active, api, channel }: BackgroundPanelProps) => {
  if (!active) {
    return null;
  }
  const store = api.store();
  const storyId = store.getSelection().storyId;
  const story = store.fromId(storyId);

  const themeOptions: ThemeOption[] = story.parameters?.[PARAM_KEY] ?? [];

  const setTheme = (theme: string) => {
    channel.emit(ThemeEvents.UPDATE_THEME, theme);
  };
  return (
    <View>
      {themeOptions.map(({ value, name }) => (
        <Button key={name} title={name} onPress={() => setTheme(value)} />
      ))}
    </View>
  );
};
