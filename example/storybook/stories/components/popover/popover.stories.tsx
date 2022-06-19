import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Popover } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { action } from '@storybook/addon-actions';

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'column',
  backgroundColor: 'gray',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
};

storiesOf('Popover', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('Two buttons', () => (
    <Popover
      title="Remove item?"
      message="Are you sure want to remove this item from your cart?"
      actionButton={{
        title: 'Sure',
        onPress: action('clicked-action-button'),
      }}
      cancelButton={{
        title: 'No, thanks',
        onPress: action('clicked-canel-button'),
      }}
    />
  ))
  .add('One button', () => (
    <Popover
      title="Opps! Something went wrong"
      message="Please try again later?"
      actionButton={{
        title: 'Okay',
        onPress: action('clicked-action-button'),
      }}
    />
  ));
