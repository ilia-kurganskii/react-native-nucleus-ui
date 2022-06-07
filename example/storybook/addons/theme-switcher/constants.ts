import type { Theme } from 'react-native-nucleus-ui';

export const PARAM_KEY = 'themes';
export const ADDON_ID = 'storybook-addon-theme-switcher';
export const PANEL_ID = `${ADDON_ID}/theme-panel`;

export interface ThemeOption {
  theme: Theme;
  value: string;
  default?: boolean;
  name: string;
}

export const ThemeEvents = {
  SET: `${ADDON_ID}:set`,
  UNSET: `${ADDON_ID}:unset`,
  UPDATE_THEME: `${ADDON_ID}:update`,
};
