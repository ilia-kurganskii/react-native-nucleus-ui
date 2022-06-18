import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { PageControls } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const additionalStyle: ViewStyle = {
  marginBottom: 16,
  width: '100%',
};

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'column',
  flexWrap: 'wrap',
};

storiesOf('Page Controls', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('All', () => getPageControls());

function getPageControls() {
  return (
    <>
      <PageControls count={2} selectedIndex={0} style={additionalStyle} />
      <PageControls count={2} selectedIndex={1} style={additionalStyle} />
      <PageControls count={3} selectedIndex={2} style={additionalStyle} />
    </>
  );
}
