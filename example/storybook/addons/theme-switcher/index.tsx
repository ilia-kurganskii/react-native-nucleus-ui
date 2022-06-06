import * as React from 'react';

import addons, { makeDecorator } from '@storybook/addons';
import Container from './container';
import { PARAM_KEY, ThemeOption } from './constants';

export interface Background {
  name: string;
  value: string;
  default?: boolean;
}

export const withThemes = makeDecorator({
  name: 'withThemes',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,

  wrapper: (getStory, context, { options, parameters }) => {
    const data = parameters || options || [];
    const themeOptions: ThemeOption[] = Array.isArray(data)
      ? data
      : Object.values(data);

    let themeValue;
    if (themeOptions.length !== 0) {
      const defaultOrFirst =
        themeOptions.find((x) => x.default) || themeOptions[0];

      if (defaultOrFirst) {
        themeValue = defaultOrFirst.value;
      }
    }
    return (
      <Container
        initialThemeValue={themeValue}
        themeOptions={themeOptions}
        channel={addons.getChannel()}
      >
        {getStory(context)}
      </Container>
    );
  },
});
