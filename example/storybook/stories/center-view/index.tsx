import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { centerViewStyles } from './style';

export default function CenterView({ children }: { children: ReactNode }) {
  return <View style={centerViewStyles.main}>{children}</View>;
}
