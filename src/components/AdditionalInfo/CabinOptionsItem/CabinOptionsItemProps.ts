import { SyntheticEvent } from 'react';

export interface CabinOptionsItemProps {
  handleChange: (
    panel: string
  ) => (event: SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | false;
  panelName: string;
  key: string;
  content: {
    number: string;
    subscription: string;
    title: string;
    size: {
      title: string;
      text: string;
    };
    occupancy: {
      title: string;
      text: string;
    };
    features: {
      title: string;
      text: string;
    };
    description: {
      title: string;
      text: string;
      image: string;
    };
    price: {
      title: string;
    };
  };
}
