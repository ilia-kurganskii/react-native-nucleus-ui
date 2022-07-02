import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ProgressBar } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { number } from '@storybook/addon-knobs';

const additionalStyle: ViewStyle = {
  marginBottom: 16,
  width: '100%',
};

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'column',
  flexWrap: 'wrap',
};

storiesOf('Progress bar', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('All', () => getProgressBar());

function getProgressBar() {
  return (
    <>
      <ProgressBar progress={0} style={additionalStyle} />
      <ProgressBar progress={50} style={additionalStyle} />
      <ProgressBar progress={100} style={additionalStyle} />
      <ProgressBar progress={number('progress', 0)} style={additionalStyle} />
    </>
  );
}
