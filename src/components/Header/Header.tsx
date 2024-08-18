import Logo from '../../assets/svg/logo_iceaxe.svg?react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { theme } from '../../theme/theme';

const menuItems = ['Tour', 'About Us', 'Reviews', 'Faq', 'Contacts'];

export function Header() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '94px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '85%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <IconButton>
            <Logo
              fill={theme.palette.primary.main}
              width="122px"
              height="56px"
            />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'right',
            }}
          >
            {menuItems.map((item) => (
              <Button key={item}>
                <Typography
                  variant="linkTitle1"
                  color={theme.palette.text.secondary}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
