import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { CabinOptionsItemProps } from './CabinOptionsItemProps';
import { ButtonEllipse } from '../../ButtonEllipse';
import { TEXT } from '../../../content/content';

export default function CabinOptionsItem({
  expanded,
  handleChange,
  content,
  panelName,
}: CabinOptionsItemProps) {
  return (
    <>
      <Divider />
      <Accordion
        elevation={0}
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
        sx={{
          '&.Mui-expanded': {
            marginBottom: '0',
          },
        }}
      >
        <AccordionSummary
          sx={{
            padding: 0,
            height: expanded ? '56px' : '67px',
            minHeight: '47px',
            '&.Mui-expanded': {
              minHeight: '50px',
            },
          }}
          expandIcon={
            expanded === panelName ? (
              <RemoveIcon color={'primary'} />
            ) : (
              <AddIcon color={'primary'} />
            )
          }
        >
          <Grid
            container
            columns={4}
            gridRow={3}
            maxWidth={'78em'}
            height={'20px'}
          >
            <Grid item columns={1} md={1}>
              <Typography variant="description">{content.number}</Typography>
            </Grid>
            <Grid item columns={1} md={1}>
              <Typography variant="description">{content.title}</Typography>
            </Grid>
            <Grid item columns={1} md={1}>
              <Typography variant="description">
                {content.description.title}
              </Typography>
            </Grid>
            <Grid item columns={1} md={1}>
              <Typography variant="description">
                {content.price.title}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            mb: '20px',
            padding: 0,
          }}
        >
          <Grid container columns={4} gridRow={3} maxWidth={'78em'}>
            <Grid item columns={1} md={1}>
              <Typography variant="text1" component={'p'} maxWidth={'165px'}>
                {content.subscription}
              </Typography>
            </Grid>
            <Grid item columns={1} md={1}>
              <Stack gap={'10px'}>
                <Box>
                  <Typography
                    component={'p'}
                    variant="text1"
                    sx={{
                      opacity: 0.8,
                    }}
                  >
                    {content.size.title}
                  </Typography>
                  <Typography variant="text1" component={'p'}>
                    {content.size.text}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component={'p'}
                    variant="text1"
                    sx={{
                      opacity: 0.8,
                    }}
                  >
                    {content.occupancy.title}
                  </Typography>
                  <Typography variant="text1" component={'p'}>
                    {content.occupancy.text}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component={'p'}
                    variant="text1"
                    sx={{
                      opacity: 0.8,
                    }}
                  >
                    {content.features.title}
                  </Typography>
                  <Typography variant="text1" component={'p'}>
                    {content.features.text}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item columns={1} md={1}>
              <Stack gap={'20px'}>
                <Typography variant="text1" component={'p'} maxWidth={'293px'}>
                  {content.description.text}
                </Typography>
                <Box
                  sx={{
                    width: '272px',
                    height: '174px',
                    position: 'relative',
                    borderRadius: '6px',
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), url(${content.description.image}) lightgray 50% / cover no-repeat`,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '75%',
                      top: '20%',
                    }}
                  >
                    <ButtonEllipse
                      variantTypography="buttonTitle2"
                      bgColor="primary.main"
                      color="text.secondary"
                      width="100px"
                      text={TEXT.additionInfo.tabPanel.buttonEllipse}
                    />
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
