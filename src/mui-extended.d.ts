import '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    numbers1: true;
    numbers2: true;
    numbers3: true;
    numbers4: true;
    description: true;
    descriptor: true;
    cardTitle: true;
    cardTitle2: true;
    fieldText: true;
    tags: true;
    buttonTitle1: true;
    buttonTitle2: true;
    buttonTitle3: true;
    buttonTitle4: true;
    linkTitle1: true;
    linkTitle2: true;
  }
}
