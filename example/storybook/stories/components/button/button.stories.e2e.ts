import { device } from 'detox';
import jestExpect from 'expect';

describe('Buttons', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  ['ios', 'android'].forEach((typeOS) => {
    describe(`Screenshots :${typeOS}:`, () => {
      describe('Appearance primary', () => {
        beforeEach(async () => {
          await device.reloadReactNative();
          await element(by.text('Appearances primary')).tap();
          await element(by.id('story-view')).tap();
        });

        it('should have default button', async () => {
          jestExpect(
            await element(by.id('primary-default')).takeScreenshot('')
          ).toMatchImageSnapshot();
        });
      });
    });
  });
});
