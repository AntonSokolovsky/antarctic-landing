import { SyntheticEvent, useState } from 'react';
import { Divider } from '@mui/material';
import { TEXT } from '../../../content/content';
import CabinOptionsItem from '../CabinOptionsItem/CabinOptionsItem';

const cabinOptionsText = Object.values(TEXT.additionInfo.tabPanel.cabinOptions);
export default function CabinOptions() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Divider />
      {cabinOptionsText.map((cabinOptionText, index) => (
        <CabinOptionsItem
          key={cabinOptionText.number}
          content={cabinOptionText}
          expanded={expanded}
          panelName={`panel${index + 1}`}
          handleChange={handleChange}
        />
      ))}
    </>
  );
}
