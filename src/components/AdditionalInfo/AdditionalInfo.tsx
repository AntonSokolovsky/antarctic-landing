import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { TagsTab } from './TagsTab';
import { TEXT } from '../../content/content';
import CabinOptions from './CabinOptions/CabinOptions';
import { Descriptor } from '../Descriptor';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ pt: '20px' }}>{children}</Box>}
    </div>
  );
}
export function AdditionalInfo() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component={'section'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
      mt={'180px'}
    >
      <Box maxWidth={'78em'} width={'100%'}>
        <Descriptor text={TEXT.additionInfo.descriptor} />
        <Box sx={{ maxWidth: '100%' }} mt={'40px'}>
          <Tabs
            TabIndicatorProps={{
              sx: { display: 'none' },
            }}
            variant="scrollable"
            sx={{
              '.MuiTabs-flexContainer': {
                gap: '20px',
              },
            }}
            value={value}
            onChange={handleChange}
          >
            {Object.keys(TEXT.additionInfo.tags).map((tag, index) => (
              <TagsTab key={tag} selected={value === index} text={tag} />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <CabinOptions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
