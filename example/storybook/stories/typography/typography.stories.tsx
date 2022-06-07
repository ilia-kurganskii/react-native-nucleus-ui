import { storiesOf } from '@storybook/react-native';
import React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { ScrollView, Text } from 'react-native';
import { Colors, TypographyPresets } from 'react-native-nucleus-ui';

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
};

const textStyle: TextStyle = {
  marginBottom: 16,
  color: Colors.primary.base,
};

storiesOf('Typography', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('Title 1', () => (
    <Text style={[TypographyPresets.Title1, textStyle]}>Title 1</Text>
  ))
  .add('Title 2', () => (
    <Text style={[TypographyPresets.Title2, textStyle]}>Title 2</Text>
  ))
  .add('Title 3', () => (
    <Text style={[TypographyPresets.Title3, textStyle]}>Title 3</Text>
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
      <Text style={[preset.Bold, textStyle]}>{`${prefix}/Bold`}</Text>
      <Text style={[preset.Medium, textStyle]}>{`${prefix}/Medium`}</Text>
      <Text style={[preset.Regular, textStyle]}>{`${prefix}/Regular`}</Text>
    </>
  );
}
