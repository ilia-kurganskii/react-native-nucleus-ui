import type { TextStyle } from 'react-native';

const Fonts = {
  Bold: 'Inter-Bold',
  Medium: 'Inter-Medium',
  Regular: 'Inter-Regular',
} as const;

function fontSetup(
  size: number,
  lineHeight: number,
  fontWeight: keyof typeof Fonts
): TextStyle {
  return {
    fontFamily: Fonts[fontWeight],
    fontSize: size,
    lineHeight: lineHeight,
  };
}

export const TypographyPresets = {
  Title1: fontSetup(48, 56, 'Bold'),
  Title2: fontSetup(32, 36, 'Bold'),
  Title3: fontSetup(24, 32, 'Bold'),
  Large: {
    None: {
      Bold: fontSetup(18, 18, 'Bold'),
      Medium: fontSetup(18, 18, 'Medium'),
      Regular: fontSetup(18, 18, 'Regular'),
    },
    Tight: {
      Bold: fontSetup(18, 20, 'Bold'),
      Medium: fontSetup(18, 20, 'Medium'),
      Regular: fontSetup(18, 20, 'Regular'),
    },
    Normal: {
      Bold: fontSetup(18, 24, 'Bold'),
      Medium: fontSetup(18, 24, 'Medium'),
      Regular: fontSetup(18, 24, 'Regular'),
    },
  },
  Regular: {
    None: {
      Bold: fontSetup(16, 16, 'Bold'),
      Medium: fontSetup(16, 16, 'Medium'),
      Regular: fontSetup(16, 16, 'Regular'),
    },
    Tight: {
      Bold: fontSetup(16, 20, 'Bold'),
      Medium: fontSetup(16, 20, 'Medium'),
      Regular: fontSetup(16, 20, 'Regular'),
    },
    Normal: {
      Bold: fontSetup(16, 24, 'Bold'),
      Medium: fontSetup(16, 24, 'Medium'),
      Regular: fontSetup(16, 24, 'Regular'),
    },
  },
  Small: {
    None: {
      Bold: fontSetup(14, 14, 'Bold'),
      Medium: fontSetup(14, 14, 'Medium'),
      Regular: fontSetup(14, 14, 'Regular'),
    },
    Tight: {
      Bold: fontSetup(14, 16, 'Bold'),
      Medium: fontSetup(14, 16, 'Medium'),
      Regular: fontSetup(14, 16, 'Regular'),
    },
    Normal: {
      Bold: fontSetup(14, 20, 'Bold'),
      Medium: fontSetup(14, 20, 'Medium'),
      Regular: fontSetup(14, 20, 'Regular'),
    },
  },
  Tiny: {
    None: {
      Bold: fontSetup(12, 12, 'Bold'),
      Medium: fontSetup(12, 12, 'Medium'),
      Regular: fontSetup(12, 12, 'Regular'),
    },
    Tight: {
      Bold: fontSetup(12, 14, 'Bold'),
      Medium: fontSetup(12, 14, 'Medium'),
      Regular: fontSetup(12, 14, 'Regular'),
    },
    Normal: {
      Bold: fontSetup(12, 16, 'Bold'),
      Medium: fontSetup(12, 16, 'Medium'),
      Regular: fontSetup(12, 16, 'Regular'),
    },
  },
} as const;
