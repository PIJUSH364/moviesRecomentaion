import { Stack, Box, Typography, Drawer, IconButton } from '@mui/material';
import React, { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Store } from '../store/Store';
import SearchBar from '../store/SearchBar';
import data from '../store/data';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../auth/Login';
import RenderAuth from '../auth/RenderAuth';
const bgImg = {
  background: `url(https://images.unsplash.com/photo-1537113399937-1cb9c5b273ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bnNldCUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
};
const MenuItems = styled(Typography)({
  color: 'rgba(255,255,255,0.8)',
  fontFamily: 'monospace',
  fontSize: '1.4rem',
  fontFamily: 500,
  padding: '5px 1.4rem',
  transition: 'all 1.2s ease-in-out',
  borderRadius: '30px',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
const MenuShown = styled(MenuIcon)({
  color: 'rgba(255,255,255,0.8)',
  transition: 'all 1.2s ease-in-out',
  '&:hover': {
    color: 'rgba(255,255,255,0.5)',
  },
});
function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  // console.log('moviesnav--', movies);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      pt={3}
      sx={{
        height: { xs: '13vh', sm: '13vh', md: '18vh', lg: '15vh', xl: '20vh' },
      }}
    >
      <Box>
        <Link to="/">
          <img
            style={{ width: '5rem' }}
            src="https://fh-sites.imgix.net/sites/1715/2018/09/07203547/San-Francisco-Movie-Tours-Logo.png?auto=compress%2Cformat&w=1024&h=1024&fit=max"
            alt="app--logo"
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'auto',
            sm: '1fr',
            md: '1.4fr 2fr',
            lg: '1.2fr 2fr',
          },
          alignItems: 'baseline',
        }}
      >
        <Box>
          <SearchBar placeholder="Find movies..." data={data} />
        </Box>
        <Stack
          direction="row"
          sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
        >
          <Link to="/">
            <MenuItems>Home</MenuItems>
          </Link>{' '}
          <Link to="movies">
            <MenuItems>Movies</MenuItems>
          </Link>{' '}
          <Link to="/">
            <MenuItems>Home4</MenuItems>
          </Link>{' '}
          <Link to="/">
            <MenuItems>Home4</MenuItems>
          </Link>{' '}
          <Link to="/">
            <MenuItems>Home4</MenuItems>
          </Link>
        </Stack>
      </Box>
      <Box
        mt={-1.4}
        sx={{
          paddingLeft: { xs: '1rem', sm: '1rem', md: '0', lg: '0' },
          paddingRight: { xs: '1rem', sm: '1rem', md: '0', lg: '0' },
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuShown fontSize="large" />
        </IconButton>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            // height="100vh"
            textAlign="center"
            role="presentation"
            sx={{
              backgroundColor: '#696969',
              color: '#FFF',
              width: { xs: '80vw', sm: '60vw', md: '50vw', lg: '30vw' },
            }}
          >
            <RenderAuth />
          </Box>
        </Drawer>
      </Box>
    </Stack>
  );
}

export default Nav;
