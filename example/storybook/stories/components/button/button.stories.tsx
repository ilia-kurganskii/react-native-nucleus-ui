import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button, ValueOf } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { capitalize } from '../../../utils/capitalize';

const styleWithMargin: ViewStyle = {
  marginBottom: 16,
  marginRight: 32,
};

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
};

storiesOf('Button', module)
  .addDecorator((story) => (
    <ScrollView
      testID="story-view"
      contentContainerStyle={scrollViewWithPaddingStyle}
      children={story()}
    />
  ))
  .add('Appearances primary large', () =>
    getButtonsStoryForAppearance(Button.appearances.primary, Button.sizes.large)
  )
  .add('Appearances primary block', () =>
    getButtonsStoryForAppearance(Button.appearances.primary, Button.sizes.block)
  )
  .add('Appearances primary small', () =>
    getButtonsStoryForAppearance(Button.appearances.primary, Button.sizes.small)
  )
  .add('Appearances secondary block', () =>
    getButtonsStoryForAppearance(
      Button.appearances.secondary,
      Button.sizes.block
    )
  )
  .add('Appearances secondary large', () =>
    getButtonsStoryForAppearance(
      Button.appearances.secondary,
      Button.sizes.large
    )
  )
  .add('Appearances outline block', () =>
    getButtonsStoryForAppearance(Button.appearances.outline, Button.sizes.block)
  )
  .add('Appearances outline large', () =>
    getButtonsStoryForAppearance(Button.appearances.outline, Button.sizes.large)
  )
  .add('Appearances outline small', () =>
    getButtonsStoryForAppearance(Button.appearances.outline, Button.sizes.small)
  )
  .add('Appearances transparent block', () =>
    getButtonsStoryForAppearance(
      Button.appearances.transparent,
      Button.sizes.block
    )
  )
  .add('Appearances transparent large', () =>
    getButtonsStoryForAppearance(
      Button.appearances.transparent,
      Button.sizes.large
    )
  )
  .add('Appearances transparent small', () =>
    getButtonsStoryForAppearance(
      Button.appearances.transparent,
      Button.sizes.small
    )
  );

function getButtonsStoryForAppearance(
  appearance: ValueOf<typeof Button.appearances>,
  size: ValueOf<typeof Button.sizes>
) {
  const title = `${capitalize(size)} + ${capitalize(appearance)}`;
  return (
    <>
      <Button
        onPress={action('clicked-text')}
        testID={`${appearance}-default`}
        appearance={appearance}
        style={styleWithMargin}
        title={title}
        size={size}
      />

      <Button
        testID={`${appearance}-default`}
        icon="message-circle"
        appearance={appearance}
        size={size}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        testID={`${appearance}-default`}
        icon="arrow-right"
        size={size}
        iconPosition="right"
        appearance={appearance}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        testID={`${appearance}-default`}
        icon="message-circle"
        size={size}
        iconPosition="side"
        appearance={appearance}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        size={size}
        testID={`${appearance}-disabled`}
        appearance={appearance}
        onPress={action('clicked-text')}
        disabled={true}
        style={styleWithMargin}
        title={title}
      />
      <Button
        size={size}
        testID={`${appearance}-disabled`}
        appearance={appearance}
        icon="activity"
        onPress={action('clicked-text')}
        disabled={true}
        style={styleWithMargin}
        title={title}
      />
    </>
  );
}
