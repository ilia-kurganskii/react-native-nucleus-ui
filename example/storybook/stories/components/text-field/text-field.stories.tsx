import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { TextField } from 'react-native-nucleus-ui';
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

storiesOf('Text field', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('All', () => getTextFields());

function getTextFields() {
  return (
    <>
      <TextField value="Default" style={additionalStyle} />
      <TextField placeholder="Placeholder" style={additionalStyle} />
      <TextField value="Error" error={true} style={additionalStyle} />
      <TextField
        placeholder="Error placeholder"
        error={true}
        style={additionalStyle}
      />
      <TextField value="Disabled" editable={false} style={additionalStyle} />
      <TextField
        placeholder="Disabled placeholder"
        editable={false}
        style={additionalStyle}
      />
    </>
  );
}
