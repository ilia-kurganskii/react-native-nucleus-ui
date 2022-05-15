// @ts-ignore
import { StyleSheet } from 'react-native';
import NamedStyles = StyleSheet.NamedStyles;

export function styleForState<Prefix extends string, T extends NamedStyles<T>>(
  prefix: Prefix,
  styles: T
) {
  const states = Object.keys(styles) as unknown as [keyof T];
  return states.reduce((prev, state) => {
    // @ts-ignore
    prev[prefix + '_' + state] = styles[state];
    return prev;
  }, {}) as {
    [Property in keyof T as `${string & Prefix}_${string &
      Property}`]: T[Property];
  };
}
