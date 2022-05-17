import { device } from 'detox';

import { compareScreenshot } from '../../../utils/compare-screenshots';
describe('Buttons', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Appearance primary', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text('Appearances primary')).tap();
      await element(by.id('story-view')).tap();
    });

    it('should have default button', async () => {
      await compareScreenshot(
        'primary-default',
        by.id('primary-default'),
        __dirname
      );
    });
  });
});
