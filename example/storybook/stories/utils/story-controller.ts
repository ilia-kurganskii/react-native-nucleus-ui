import Events from '@storybook/core-events';
import createChannel from '@storybook/channel-websocket';
import { BroadcastServer } from './boadcast-server';
import { ThemeEvents } from '../../addons/theme-switcher/constants';

export class StoryController {
  private channel?: ReturnType<typeof createChannel>;
  private server: BroadcastServer;

  constructor(private readonly port: number = 7007) {
    this.server = new BroadcastServer(this.port);
  }

  openChannel = () => {
    this.server.start();
    this.channel = createChannel({
      url: `ws://localhost:${this.port}`,
      async: false,
      onError: (message) => console.log('ERROR: ' + message),
    });
  };

  setTheme = (themeValue: string) => {
    return new Promise<void>((resolve) => {
      this.channel?.emit(ThemeEvents.UPDATE_THEME, themeValue);
      resolve();
    });
  };

  closeChannel = async () => {
    await this.server.stop();
    this.channel = undefined;
  };

  async getStories(): Promise<any> {
    return new Promise((resolve) => {
      this.channel?.emit(Events.GET_STORIES);
      this.channel?.once(Events.SET_STORIES, resolve);
    });
  }

  setStory(storyId: string) {
    return new Promise((resolve) => {
      this.channel?.once(Events.STORY_RENDERED, resolve);
      this.channel?.emit(Events.SET_CURRENT_STORY, { storyId });
    });
  }
}
