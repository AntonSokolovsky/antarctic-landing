import { Button, Typography } from '@mui/material';
import { ButtonEllipseProps } from './ButtonEllipseProps';

export function ButtonEllipse(props: ButtonEllipseProps) {
  const {
    bgColor,
    variantTypography,
    text,
    rotate,
    width,
    margin,
    color,
    ...other
  } = props;
  return (
    <Button
      sx={{
        borderRadius: '100%',
        bgcolor: bgColor,
        color: color,
        '&:hover': {
          bgcolor: bgColor,
        },
        rotate: rotate || '0',
        width: width,
        height: width,
        margin: margin,
      }}
      {...other}
    >
      <Typography variant={variantTypography}>{text}</Typography>
    </Button>
  );
}
