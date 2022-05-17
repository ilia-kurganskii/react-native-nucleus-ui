import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import type { ValueOf } from '../../../../../lib/typescript/utils';

const styleWithMargin: ViewStyle = {
  marginBottom: 15,
};

storiesOf('Button', module)
  .addDecorator((story) => (
    <ScrollView
      testID="story-view"
      contentContainerStyle={{
        padding: 16,
      }}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('Appearances primary', () =>
    getButtonsStoryForAppearance(Button.appearances.primary)
  )
  .add('Appearances secondary', () =>
    getButtonsStoryForAppearance(Button.appearances.secondary)
  )
  .add('Appearances outline', () =>
    getButtonsStoryForAppearance(Button.appearances.outline)
  )
  .add('Appearances transparent', () =>
    getButtonsStoryForAppearance(Button.appearances.transparent)
  );

function getButtonsStoryForAppearance(
  appearance: ValueOf<typeof Button.appearances>
) {
  return (
    <>
      <Button
        testID={`${appearance}-default`}
        appearance={appearance}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title="Default"
      />
      <Button
        testID={`${appearance}-disabled`}
        appearance={appearance}
        onPress={action('clicked-text')}
        disabled={true}
        style={styleWithMargin}
        title="Disabled"
      />
    </>
  );
}
