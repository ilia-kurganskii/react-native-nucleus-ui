import React from 'react';
import { Text, TextProps } from 'react-native';

import { iconNameToGlyphMap, iconVars } from './icon.vars';
import { iconStyles } from './icon.style';
import type { ValueOf } from '../../utils';

export interface IconProps extends TextProps {
  name: ValueOf<typeof iconVars.names>;
}

export interface IconStatics {
  names: typeof iconVars.names;
}

const IconComponent = React.forwardRef<Text, IconProps>((props, ref) => {
  const { name, style, ...textProps } = props;

  let glyph = name ? iconNameToGlyphMap[name] ?? '?' : '?';
  if (typeof glyph === 'number') {
    glyph = String.fromCodePoint(glyph);
  }

  return (
    <Text
      ref={ref}
      selectable={false}
      style={[style, iconStyles.icon]}
      {...textProps}
    >
      {glyph}
    </Text>
  );
});

const Icon = React.memo(IconComponent) as React.MemoExoticComponent<
  typeof IconComponent
> &
  IconStatics;

Icon.names = iconVars.names;

export { Icon };
