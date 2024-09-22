import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DestinationItemProps } from './DestinationItemProps';
import CurveArrow from '../../../assets/svg/curve-arrow.svg?react';
import { CardActionArea } from '@mui/material';

export function DestinationItem({
  title,
  coordinates,
  image,
}: DestinationItemProps) {
  return (
    <Card
      sx={{
        maxWidth: 294,
        borderRadius: '6px',
        p: '20px',
        cursor: 'pointer',
      }}
    >
      <CardActionArea href="#">
        <CardContent sx={{ p: 0 }}>
          <Typography gutterBottom variant="cardTitle" component="p">
            {title}
          </Typography>
          <Typography variant="numbers2" color={'text.primary'} component={'p'}>
            {coordinates}
          </Typography>
          <CurveArrow />
        </CardContent>
        <CardMedia
          component="div"
          sx={{
            height: 217,
            width: 254,
            borderRadius: '6px',
            m: '36px auto 0',
            background: `url(${image}) lightgray 50% / cover no-repeat`,
          }}
          title={title}
        />
      </CardActionArea>
    </Card>
  );
}
