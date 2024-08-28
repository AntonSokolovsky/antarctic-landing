import { Typography } from '@mui/material';
import { DescriptorProps } from './DescriptorProps';

export function Descriptor({ text }: DescriptorProps) {
  return (
    <Typography
      variant="descriptor"
      color={'accent.main'}
    >{`[${text}]`}</Typography>
  );
}
