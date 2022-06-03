import { storiesOf } from '@storybook/react-native';
import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { ScrollView, Text } from 'react-native';
import { TypographyPresets } from 'react-native-nucleus-ui';

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
};

const textMarginStyle: TextStyle = {
  marginBottom: 16,
};

storiesOf('Typography', module)
  .addDecorator((story) => (
    <ScrollView
      testID="story-view"
      contentContainerStyle={scrollViewWithPaddingStyle}
      children={story()}
    />
  ))
  .add('Title 1', () => (
    <Text style={[TypographyPresets.Title1, textMarginStyle]}>Title 1</Text>
  ))
  .add('Title 2', () => (
    <Text style={[TypographyPresets.Title2, textMarginStyle]}>Title 2</Text>
  ))
  .add('Title 3', () => (
    <Text style={[TypographyPresets.Title3, textMarginStyle]}>Title 3</Text>
  ))
  .add('Regular', () => (
    <>
      {getBoldMediumRegularText('Regular/None', TypographyPresets.Regular.None)}
      {getBoldMediumRegularText(
        'Regular/Normal',
        TypographyPresets.Regular.Normal
      )}
      {getBoldMediumRegularText(
        'Regular/Tight',
        TypographyPresets.Regular.Tight
      )}
    </>
  ))
  .add('Large', () => (
    <>
      {getBoldMediumRegularText('Large/None', TypographyPresets.Large.None)}
      {getBoldMediumRegularText('Large/Normal', TypographyPresets.Large.Normal)}
      {getBoldMediumRegularText('Large/Tight', TypographyPresets.Large.Tight)}
    </>
  ))

  .add('Small', () => (
    <>
      {getBoldMediumRegularText('Small/None', TypographyPresets.Small.None)}
      {getBoldMediumRegularText('Small/Normal', TypographyPresets.Small.Normal)}
      {getBoldMediumRegularText('Small/Tight', TypographyPresets.Small.Tight)}
    </>
  ))
  .add('Tiny', () => (
    <>
      {getBoldMediumRegularText('Tiny/None', TypographyPresets.Tiny.None)}
      {getBoldMediumRegularText('Tiny/Normal', TypographyPresets.Tiny.Normal)}
      {getBoldMediumRegularText('Tiny/Tight', TypographyPresets.Tiny.Tight)}
    </>
  ));

function getBoldMediumRegularText(
  prefix: string,
  preset: {
    Bold: TextStyle;
    Medium: TextStyle;
    Regular: TextStyle;
  }
) {
  return (
    <>
      <Text style={[preset.Bold, textMarginStyle]}>{`${prefix}/Bold`}</Text>
      <Text style={[preset.Medium, textMarginStyle]}>{`${prefix}/Medium`}</Text>
      <Text
        style={[preset.Regular, textMarginStyle]}
      >{`${prefix}/Regular`}</Text>
    </>
  );
}
