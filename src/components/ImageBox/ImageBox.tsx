import { Box } from '@mui/material';
import { ImageBoxProps } from './ImageBoxProps';

export function ImageBox({ urlImage, width, height }: ImageBoxProps) {
  return (
    <Box
      width={width}
      height={height}
      sx={{
        borderRadius: '6px',
        background: `linear-gradient(0deg,
rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%),
url(${urlImage}) lightgray 50% / cover no-repeat`,
      }}
    />
  );
}
