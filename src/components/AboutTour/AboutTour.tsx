import { Box, Grid, Typography } from '@mui/material';
import { Descriptor } from '../Descriptor';
import { TEXT } from '../../content/content';
import aboutTourImg1 from '../../assets/img/about-tour-1.jfif';
import aboutTourImg2 from '../../assets/img/about-tour-2.jfif';
import { ImageBox } from '../ImageBox';

export function AboutTour() {
  return (
    <Box
      component={'section'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
    >
      <Grid container columns={4} gridRow={3} maxWidth={'78em'}>
        <Grid item md={4}>
          <Box
            width={'100px'}
            height={'100px'}
            bgcolor={'#D9D9D9'}
            mt={'80px'}
          ></Box>
        </Grid>
        <Grid item md={4} display={'flex'} justifyContent={'space-between'}>
          <Descriptor text={TEXT.aboutTour.descriptor} />
          <Typography width={'50%'} flexWrap={'wrap'} variant="h2">
            {TEXT.aboutTour.title}
          </Typography>
        </Grid>
        <Grid item mt={'10px'}>
          <Typography
            variant="body2"
            sx={{
              textIndent: '50%',
            }}
          >
            {TEXT.aboutTour.subtitle}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display={'flex'}
          gap={'10px'}
          justifyContent={'center'}
          mt={'20px'}
        >
          <ImageBox width={'170px'} height={'141px'} urlImage={aboutTourImg1} />
          <ImageBox width={'170px'} height={'141px'} urlImage={aboutTourImg2} />
        </Grid>
        <Grid item xs={2} mt={'20px'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            width={'24em'}
          >
            <Typography variant="text1">{TEXT.aboutTour.text1}</Typography>
            <Typography variant="text1">{TEXT.aboutTour.text2}</Typography>
            <Typography variant="text1">{TEXT.aboutTour.text3}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
