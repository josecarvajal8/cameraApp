export enum colors {
  background = '#EAEAEA',
  primary = '#B0C4DE',
  accent_dark = '#2F4F4F',
  accent_olive = '#808000',
  common_white = '#FFFFFF',
  common_black = '#000000',
  decline_red = '#CC0202',
}

export enum fonts {
  thin = 'Montserrat-Thin',
  light = 'Montserrat-Light',
  regular = 'Montserrat-Regular',
  semibold = 'Montserrat-Semibold',
  bold = 'Montserrat-Bold',
}

export const getFontSizes = (
  value: 'body' | 'title' | 'headline' | 'display' | 'caption',
): {fontSize: number; lineHeight: number} => {
  const sizeValue: {[key: string]: {fontSize: number; lineHeight: number}} = {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 18,
      lineHeight: 28,
    },
    headline: {
      fontSize: 24,
      lineHeight: 32,
    },
    display: {
      fontSize: 36,
      lineHeight: 44,
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
    },
  };
  return sizeValue[value];
};
