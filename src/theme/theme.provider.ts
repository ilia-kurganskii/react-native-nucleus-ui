import React, { useContext } from 'react';
import type { Theme } from './theme.types';
import { LIGHT_THEME } from './light/light-theme';

const ThemeContext = React.createContext<Theme>(LIGHT_THEME);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
