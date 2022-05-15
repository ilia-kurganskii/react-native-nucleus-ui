import { StyleSheet } from 'react-native';
import NamedStyles = StyleSheet.NamedStyles;
import type { Theme } from './theme.types';

export function createThemedStyleSheet<
  Styles extends NamedStyles<Styles>,
  T extends object = Theme
>(createStylesWithTheme: (theme: T) => Styles) {
  return (theme: T) => StyleSheet.create(createStylesWithTheme(theme));
}
