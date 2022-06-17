import {
  createThemedStyleSheet,
  ExtendedTheme,
  extendTheme,
  LIGHT_THEME,
  Theme,
} from '../';

describe('Theme Utils', () => {
  describe('createThemedStyleSheet', () => {
    it('should create styles with light theme', () => {
      const getStyles = createThemedStyleSheet((theme) => ({
        container: {
          backgroundColor: theme.background.base,
        },
      }));

      const resultStyles = getStyles({
        background: {
          base: 'red',
        },
      } as Theme);

      expect(resultStyles).toEqual({
        container: {
          backgroundColor: 'red',
        },
      });
    });

    it('should create styles with extended theme', () => {
      type CustomTheme = {
        screenTheme: {
          backgroundColor: string;
        };
      };

      const getStyles = createThemedStyleSheet(
        (theme: ExtendedTheme<CustomTheme>) => ({
          container: {
            backgroundColor: theme.screenTheme.backgroundColor,
          },
        })
      );

      const resultStyles = getStyles({
        screenTheme: {
          backgroundColor: 'orange',
        },
      } as ExtendedTheme<CustomTheme>);

      expect(resultStyles).toEqual({
        container: {
          backgroundColor: 'orange',
        },
      });
    });
  });

  describe('extendTheme', () => {
    type CustomTheme = {
      backgroundColor: string;
    };

    const customLightTheme: CustomTheme = {
      backgroundColor: 'white',
    };

    const customDarkTheme: CustomTheme = {
      backgroundColor: 'black',
    };

    it('should extend light theme', () => {
      const extendedTheme = extendTheme<CustomTheme>(LIGHT_THEME, {
        light: customLightTheme,
        dark: customDarkTheme,
      });

      const getStyles = createThemedStyleSheet(
        (theme: ExtendedTheme<CustomTheme>) => ({
          container: {
            backgroundColor: theme.backgroundColor,
          },
        })
      );

      expect(getStyles(extendedTheme)).toEqual({
        container: {
          backgroundColor: 'white',
        },
      });
    });
  });
});
