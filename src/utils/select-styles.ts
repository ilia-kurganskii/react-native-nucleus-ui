import type { StyleSheet, ViewStyle } from 'react-native';

export function selectStyles<
  T extends ViewStyle,
  Params extends Object,
  Key extends keyof Params,
  Styles extends StyleSheet.NamedStyles<Styles>
>(
  styles: Styles,
  params: Params,
  conditionStyles: Partial<
    Record<
      keyof Styles,
      boolean | Partial<Record<keyof Params, Params[Key] | Params[Key][]>>
    >
  >
): T[] {
  const styleNames = Object.keys(styles) as unknown as (keyof Styles)[];
  return styleNames
    .filter((styleName) => {
      const condition = conditionStyles[styleName];
      if (!condition) {
        return false;
      }
      if (typeof condition === 'boolean') {
        return condition;
      } else if (typeof condition === 'object') {
        // @ts-ignore
        return checkCondition(params, condition);
      }
      return false;
    })
    .map((styleName) => {
      return styles[styleName] as unknown as T;
    });
}

function checkCondition<Params extends Object, Key extends keyof Params>(
  params: Params,
  condition: Record<keyof Params, Params[Key]>
): boolean {
  const conditionParams = Object.keys(condition) as unknown as (keyof Params)[];
  return conditionParams.every((conditionParam) => {
    const conditionalValue = condition[conditionParam];
    if (Array.isArray(conditionalValue)) {
      return conditionalValue.includes(params[conditionParam]);
    }
    return conditionalValue === params[conditionParam];
  });
}
