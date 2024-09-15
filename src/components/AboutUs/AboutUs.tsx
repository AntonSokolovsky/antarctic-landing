import { Box, Grid, Typography } from '@mui/material';
import { Descriptor } from '../Descriptor';
import { TEXT } from '../../content/content';
import { ImageBox } from '../ImageBox';

export default function AboutUs() {
  return (
    <Box
      component={'section'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
      mt={'180px'}
    >
      <Grid container columns={4} gridRow={5} maxWidth={'78em'}>
        <Grid item md={4} display={'flex'} justifyContent={'space-between'}>
          <Descriptor text={TEXT.aboutUs.descriptor} />
          <Box width={'75%'} flexWrap={'wrap'}>
            <Typography variant="h2">{TEXT.aboutUs.title.part1}</Typography>
            <Typography variant="h2">{TEXT.aboutUs.title.part2}</Typography>
            <Typography variant="h2">{TEXT.aboutUs.title.part3}</Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          mt={'10px'}
          md={4}
          columns={4}
          justifyContent={'flex-end'}
        >
          <Grid item md={2}>
            <Typography variant="h2" maxWidth={'530px'}>
              {TEXT.aboutUs.title.part4}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          mt={'15px'}
          columns={4}
          justifyContent={'flex-end'}
        >
          <Grid item md={2}>
            <Typography variant="text1" maxWidth={'360px'} component={'p'}>
              {TEXT.aboutUs.subtitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item columns={4}>
          <Grid item md={2} alignSelf={'flex-end'} mt={'20px'}>
            <ImageBox
              width={'294px'}
              height={'256px'}
              urlImage={TEXT.aboutUs.imageLeft}
            />
          </Grid>
          <Grid item md={2} mt={'20px'}>
            <ImageBox
              width={'595px'}
              height={'349px'}
              urlImage={TEXT.aboutUs.imageRight}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          mt={'20px'}
          columns={4}
          justifyContent={'flex-end'}
        >
          <Grid item md={2}>
            <Typography variant="text1" maxWidth={'365px'} component={'p'}>
              {TEXT.aboutUs.text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
