import * as React from 'react';
import addons from '@storybook/addons';

import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';
import { ThemePanel } from './theme-panel';

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Theme',
    render: ({ active }) => (
      <ThemePanel api={api} channel={channel} active={active} />
    ),
    paramKey: PARAM_KEY,
  });
});
