import React, { useContext } from 'react';
import type { ExtendedTheme } from './theme.types';
import { LIGHT_THEME } from './light/light-theme';

const ThemeContext = React.createContext<ExtendedTheme>(LIGHT_THEME);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): ExtendedTheme {
  return useContext(ThemeContext);
}
