import { Tab, Typography } from '@mui/material';
import { TagsTabProps } from './TagsTabProps';

export function TagsTab(props: TagsTabProps) {
  const { text, selected, ...other } = props;
  return (
    <Tab
      sx={{
        border: 1,
        borderRadius: '30px',
        borderColor: 'divider',
        padding: '10px 25px',
        bgcolor: selected ? 'primary.main' : 'background.paper',
        color: selected ? 'text.secondary' : 'text.primary',
      }}
      label={
        <Typography
          sx={{
            opacity: selected ? '100%' : '60%',
          }}
          variant="tags"
        >
          {text}
        </Typography>
      }
      {...other}
    />
  );
}
