import React from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-nucleus-ui';
import { getPopoverStyles } from './popover.style';

export interface PopoverButtonProps {
  title: string;
  onPress: () => void;
  testID?: string;
}

export interface PopoverProps {
  title: string;
  message: string;
  actionButton?: PopoverButtonProps;
  cancelButton?: PopoverButtonProps;
}

function PopoverComponent(props: PopoverProps) {
  let { actionButton, cancelButton, message, title } = props;
  const theme = useTheme();
  const styles = getPopoverStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionButton ? (
        <Button
          testID={actionButton.testID}
          size={Button.sizes.block}
          style={styles.actionButton}
          title={actionButton.title}
          onPress={actionButton.onPress}
        />
      ) : null}
      {cancelButton ? (
        <Button
          testID={cancelButton.testID}
          size={Button.sizes.block}
          appearance={Button.appearances.transparent}
          style={styles.cancelButton}
          title={cancelButton.title}
          onPress={cancelButton.onPress}
        />
      ) : null}
    </View>
  );
}

export const Popover = React.memo(PopoverComponent);
