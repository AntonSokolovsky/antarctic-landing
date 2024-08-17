import { ThemeOptions } from '@mui/material';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    numbers1: React.CSSProperties;
    numbers2: React.CSSProperties;
    numbers3: React.CSSProperties;
    numbers4: React.CSSProperties;
    description: React.CSSProperties;
    descriptor: React.CSSProperties;
    cardTitle: React.CSSProperties;
    cardTitle2: React.CSSProperties;
    fieldText: React.CSSProperties;
    tags: React.CSSProperties;
    buttonTitle1: React.CSSProperties;
    buttonTitle2: React.CSSProperties;
    buttonTitle3: React.CSSProperties;
    buttonTitle4: React.CSSProperties;
    linkTitle1: React.CSSProperties;
    linkTitle2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    numbers1: React.CSSProperties;
    numbers2: React.CSSProperties;
    numbers3: React.CSSProperties;
    numbers4: React.CSSProperties;
    description: React.CSSProperties;
    descriptor: React.CSSProperties;
    cardTitle: React.CSSProperties;
    cardTitle2: React.CSSProperties;
    fieldText: React.CSSProperties;
    tags: React.CSSProperties;
    buttonTitle1: React.CSSProperties;
    buttonTitle2: React.CSSProperties;
    buttonTitle3: React.CSSProperties;
    buttonTitle4: React.CSSProperties;
    linkTitle1: React.CSSProperties;
    linkTitle2: React.CSSProperties;
  }
}

export const typography: ThemeOptions = {
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 500,
      fontSize: '140px',
      textTransform: 'uppercase',
      lineHeight: '100%',
      textWrap: 'wrap',
      letterSpacing: '-4.2px',
    },
    h2: {
      fontWeight: 400,
      fontSize: '48px',
      lineHeight: '100%',
      letterSpacing: '-1.92px',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: '110px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
      letterSpacing: '-1.1px',
    },
    h4: {
      fontFamily: 'SD Georgia Light Demo, serif',
      fontSize: '40px',
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: '100%',
      letterSpacing: '-2px',
    },
    h5: {
      fontFamily: 'Oswald',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '-1.44px',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '-0.48px',
    },
    body2: {
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '110%',
      letterSpacing: '-1.28px',
    },
    body3: {
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
      letterSpacing: '-1.04px',
    },
    numbers1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    numbers2: {
      fontFamily: 'Oswald',
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '-1.6px',
      textTransform: 'uppercase',
    },
    numbers3: {
      fontFamily: 'Oswald',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    numbers4: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    descriptor: {
      fontFamily: 'Oswald',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    description: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '-0.16px',
      textTransform: 'uppercase',
    },
    cardTitle: {
      fontFamily: 'Oswald',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '120%',
      textTransform: 'uppercase',
    },
    cardTitle2: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    fieldText: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
    },
    tags: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
      letterSpacing: '-0.42px',
      textTransform: 'uppercase',
    },

    subtitle1: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    buttonTitle1: {
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    buttonTitle2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
    },
    buttonTitle3: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    buttonTitle4: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textDecorationLine: 'underline',
      textTransform: 'uppercase',
    },
    linkTitle1: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    linkTitle2: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
  },
};
