import { Box, Grid, Typography } from '@mui/material';
import { Descriptor } from '../Descriptor';
import { TEXT } from '../../content/content';
import { GallerySlider } from './GallerySlider';

export function Gallery() {
  return (
    <Box
      component={'section'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      mt={'180px'}
    >
      <Grid container columns={4} gridRow={1} maxWidth={'78em'}>
        <Grid item md={4} display={'flex'} justifyContent={'space-between'}>
          <Descriptor text={TEXT.gallery.descriptor} />
          <Typography width={'50%'} flexWrap={'wrap'} variant="h2">
            {TEXT.gallery.title}
          </Typography>
        </Grid>
      </Grid>
      <GallerySlider images={TEXT.gallery.images} />
    </Box>
  );
}