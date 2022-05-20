import { device } from 'detox';
import { StoryController } from '../../utils/story-controller';
import jestExpect from 'expect';

const STORY_IDS = [
  'button--appearances-primary',
  'button--appearances-secondary',
  'button--appearances-outline',
  'button--appearances-transparent',
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
    describe(`${typeOS}`, () => {
      STORY_IDS.forEach((storyId) =>
        it(`Story: ${storyId}`, async () => {
          await storyController.setStory(storyId);
          const screenshotPath = await element(
            by.id('story-view')
          ).takeScreenshot('');

          jestExpect(screenshotPath).toMatchImageSnapshot();
        })
      );
    });
  });
});
