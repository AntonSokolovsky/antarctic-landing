import { Button, Typography } from '@mui/material';
import { ButtonEllipseProps } from './ButtonEllipseProps';

// export function ButtonEllipse({ bgColor, children }: ButtonEllipseProps) {
//   return <Button sx={{ bgColor }}>{children}</Button>;
// }
export function ButtonEllipse({
  bgColor,
  variantTypography,
  text,
  rotate,
  width,
  margin,
}: ButtonEllipseProps) {
  return (
    <Button
      sx={{
        borderRadius: '100%',
        bgcolor: bgColor,
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
