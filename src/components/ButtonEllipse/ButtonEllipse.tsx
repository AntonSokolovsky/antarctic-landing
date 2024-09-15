import { Button, Typography } from '@mui/material';
import { ButtonEllipseProps } from './ButtonEllipseProps';

export function ButtonEllipse({
  bgColor,
  variantTypography,
  text,
  rotate,
  width,
  margin,
  color,
}: ButtonEllipseProps) {
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
    >
      <Typography variant={variantTypography}>{text}</Typography>
    </Button>
  );
}
