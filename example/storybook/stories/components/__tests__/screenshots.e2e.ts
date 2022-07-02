import { device } from 'detox';
import { StoryController } from '../../utils/story-controller';
import jestExpect from 'expect';

const STORY_IDS = [
  'button--appearances-primary-large',
  'button--appearances-primary-block',
  'button--appearances-primary-small',
  'button--appearances-secondary-block',
  'button--appearances-secondary-large',
  'button--appearances-secondary-small',
  'button--appearances-outline-block',
  'button--appearances-outline-large',
  'button--appearances-outline-small',
  'button--appearances-transparent-block',
  'button--appearances-transparent-large',
  'button--appearances-transparent-small',

  'text-field--all',

  'typography--title-1',
  'typography--title-2',
  'typography--title-3',

  'typography--regular',
  'typography--large',
  'typography--small',

  'page-controls--all',

  'popover--one-button',
  'popover--two-buttons',

  'progress-bar--all',
];

describe('Screenshots', () => {
  let storyController: StoryController = new StoryController();

  beforeAll(async () => {
    await storyController.openChannel();
    await device.launchApp();
  });

  afterAll(async () => {
    await storyController.closeChannel();
  });

  return [':ios:', ':android:'].forEach((typeOS) => {
    ['dark', 'light'].forEach((theme) => {
      describe(`${typeOS} - ${theme}`, () => {
        STORY_IDS.forEach((storyId) =>
          it(`Story: ${storyId}`, async () => {
            await storyController.setStory(storyId);
            await storyController.setTheme(theme);
            const screenshotPath = await element(
              by.id('story-view')
            ).takeScreenshot('');

            jestExpect(screenshotPath).toMatchImageSnapshot({
              failureThreshold: 2,
              failureThresholdType: 'percent',
            });
          })
        );
      });
    });
  });
});
