import { Box, Stack, Typography } from '@mui/material';
import Mountains from '../../assets/img/mountains.png';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { theme } from '../../theme/theme';
import { ButtonEllipse } from '../ButtonEllipse';

export function FirstScreen() {
  return (
    <Box
      component={'section'}
      sx={{
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `url(${Mountains})`,
        backgroundSize: '100% auto',
        backgroundPositionY: 'bottom',
        backgroundRepeat: 'no-repeat',
        margin: 0,

        minHeight: '987px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack display={'flex'} alignItems={'center'} mt={'100px'}>
        <Typography component={'p'} color={theme.palette.accent.main}>
          <Typography variant="numbers2">Oct 19</Typography>
          <HorizontalRuleIcon
            sx={{ width: '40px', height: '40px', m: '0 10px' }}
          />
          <Typography variant="numbers2">31 2024</Typography>
        </Typography>
        <Typography variant="h1" color={'text.secondary'} mt={'20px'}>
          Antarctic Peninsula
        </Typography>
        <Typography variant="h1" color={'text.secondary'}>
          Adventure cruise
        </Typography>
        <ButtonEllipse
          width="230px"
          bgColor={theme.palette.background.paper}
          variantTypography="buttonTitle1"
          text="book now"
          margin="40px"
        />
      </Stack>
    </Box>
  );
}
