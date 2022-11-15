import { Stack, Box, Typography, Drawer, IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Store } from '../store/Store';
import SearchBar from '../store/SearchBar';
import data from '../store/data';
import MenuIcon from '@mui/icons-material/Menu';
import RenderAuth from '../auth/RenderAuth';
import { NavNavLink } from 'react-router-dom';
const bgImg = {
  background: `url(https://images.unsplash.com/photo-1537113399937-1cb9c5b273ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bnNldCUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
};
const MenuItems = styled(Typography)({
  color: 'rgba(255,255,255,0.8)',
  fontFamily: 'monospace',
  fontSize: '1.2rem',
  fontFamily: 500,
  padding: '3px 1.4rem',
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
  const [moviesData, setmoviesData] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  // console.log('moviesnav--', movies);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
    );
    const data = await response.json();
    setmoviesData(data.results);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
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
          alignItems: 'center',
          justifyItems: 'stretch',
        }}
      >
        <Box>
          <SearchBar placeholder="Find movies..." data={moviesData} />
        </Box>
        <Stack
          direction="row"
          sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
          ml={1}
          gap={1}
        >
          <NavLink to="/">
            <MenuItems>Home</MenuItems>
          </NavLink>
          <NavLink to="movies">
            <MenuItems>Movies</MenuItems>
          </NavLink>{' '}
          <NavLink to="shows">
            <MenuItems>Shows</MenuItems>
          </NavLink>{' '}
          <NavLink to="livetv">
            <MenuItems>LiveTv</MenuItems>
          </NavLink>{' '}
          <NavLink to="mylist">
            <MenuItems>MyList</MenuItems>
          </NavLink>
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
            minHeight="100%"
            textAlign="center"
            role="presentation"
            sx={{
              backgroundColor: '#696969',
              color: '#FFF',
              width: { xs: '80vw', sm: '60vw', md: '50vw', lg: '30vw' },
              boxSizing: 'border-box',
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
