import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../center-view';
import { Button } from 'react-native-nucleus-ui';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')} title="Heu" />
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')} title="😀 👍 💯" />
  ));
