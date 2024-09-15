import { Box, Grid, Typography } from '@mui/material';
import { Descriptor } from '../Descriptor';
import { TEXT } from '../../content/content';
import { DestinationItem } from './DestinationItem';

const cardsContent = Object.values(TEXT.otherDestination.destinations);
export function OtherDestination() {
  return (
    <Box
      component={'section'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
      mt={'180px'}
    >
      <Grid container columns={4} gridRow={2} maxWidth={'78em'}>
        <Grid item md={4} display={'flex'} justifyContent={'space-between'}>
          <Descriptor text={TEXT.otherDestination.descriptor} />
          <Box width={'50%'}>
            <Typography flexWrap={'wrap'} variant="h2" pr={'10px'}>
              {TEXT.otherDestination.title}
            </Typography>
            <Typography
              maxWidth={'365px'}
              variant="text1"
              component={'p'}
              mt={'15px'}
            >
              {TEXT.otherDestination.subtitle}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} mt={'20px'}>
          <Grid container columns={{ md: 4 }}>
            {cardsContent.map(({ title, coordinates, image }) => (
              <Grid key={title} item md={1}>
                <DestinationItem
                  title={title}
                  coordinates={coordinates}
                  image={image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
