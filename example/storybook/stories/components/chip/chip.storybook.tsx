import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Chip, Icon } from 'react-native-nucleus-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const additionalStyle: ViewStyle = {
  marginBottom: 16,
  marginLeft: 16,
};

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
};

storiesOf('Chips', module)
  .addDecorator((story) => (
    <ScrollView
      contentContainerStyle={scrollViewWithPaddingStyle}
      // @ts-ignore
      children={story()}
    />
  ))
  .add('All', () => getChips());

function getChips() {
  return (
    <>
      <Chip selected={false} style={additionalStyle}>
        Chip
      </Chip>
      <Chip selected={true} style={additionalStyle}>
        Chip Selected
      </Chip>
      <Chip
        selected={true}
        icon={Icon.names.check}
        iconPosition={Chip.iconPositions.left}
        style={additionalStyle}
      >
        Chip with left icon
      </Chip>
      <Chip
        selected={true}
        icon={Icon.names.check}
        iconPosition={Chip.iconPositions.right}
        style={additionalStyle}
      >
        Chip with right icon
      </Chip>
      <Chip
        icon={Icon.names.check}
        iconPosition={Chip.iconPositions.left}
        style={additionalStyle}
      >
        Chip with left icon
      </Chip>
    </>
  );
}
