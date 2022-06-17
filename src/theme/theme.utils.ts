import { StyleSheet } from 'react-native';
import NamedStyles = StyleSheet.NamedStyles;
import type { ExtendedTheme, Theme } from './theme.types';

export function createThemedStyleSheet<
  Styles extends NamedStyles<Styles>,
  D extends object | undefined = undefined
>(
  createStylesWithTheme: (
    theme: D extends undefined ? Theme : ExtendedTheme<D>
  ) => Styles
) {
  return (theme: D extends undefined ? Theme : ExtendedTheme<D>) =>
    StyleSheet.create(createStylesWithTheme(theme));
}

export function extendTheme<D extends object>(
  theme: Theme,
  extendedThemeMap: {
    [key: string]: D;
  }
): ExtendedTheme<D> {
  return {
    ...theme,
    ...extendedThemeMap[theme.type],
  };
}
