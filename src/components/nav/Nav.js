import React, { useState, useContext } from 'react';
import { IconButton, Typography, Stack, Box, Drawer } from '@mui/material';
import TextField from '@mui/material/TextField';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from '../auth/Login';
import './nav.css';
import { Link } from 'react-router-dom';
import SingUp from '../auth/SingUp';
import ContactUs from '../auth/ContactUs';
import PrivicyPolicy from '../auth/PrivicyPolicy';
import { styled } from '@mui/material/styles';
import SearchAutocomplete from '../store/SearchAutocomplete';
import { Store } from '../store/Store';
import SearchBar from '../store/SearchBar';
import data from '../store/data';
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});
const drawerLayout = [
  {
    id: '1',
    component: `${(<Login />)}`,
  },
  {
    id: '2',
    component: `${(<SingUp />)}`,
  },
  {
    id: '3',
    component: `${(<ContactUs />)}`,
  },
  {
    id: '3',
    component: `${(<PrivicyPolicy />)}`,
  },
];
function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [componentvalue, setComponentvalue] = useState(1);
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  console.log('moviesnav--', movies);
  return (
    <Stack
      className="nav--container"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" alignItems="flex-start" maxHeight="100px">
        <div className="app--logo">
          <img
            style={{ width: '5rem' }}
            src="https://fh-sites.imgix.net/sites/1715/2018/09/07203547/San-Francisco-Movie-Tours-Logo.png?auto=compress%2Cformat&w=1024&h=1024&fit=max"
            alt="app--logo"
          />
        </div>
        <div className="nav--search" style={{ width: '13rem', margin: '20px' }}>
          {/* <SearchAutocomplete /> */}
          <SearchBar placeholder="Find movies..." data={data} />
        </div>
        <div className="nav--menuItems">
          <ul
            style={{
              display: 'flex',
              listStyleType: 'none',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5em',
              fontSize: '1.4em',
              fontWeight: '400',
            }}
          >
            <Link to="/">
              <li className="menuItem">Home</li>
            </Link>
            <Link to="movies">
              <li className="menuItem">Movies</li>
            </Link>
            <li className="menuItem">Shows</li>
            <li className="menuItem">Live Tv</li>
            <li className="menuItem">My list</li>
          </ul>
        </div>
      </Stack>
      <Stack className="nav--auth" pr="2em">
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            width="32vw"
            height="100vh"
            textAlign="center"
            role="presentation"
            sx={{
              backgroundColor: '#696969',
              color: '#FFF',
            }}
          >
            <Login />
            {/* <SingUp /> */}
            {/* <ContactUs /> */}
            {/* <PrivicyPolicy /> */}
          </Box>
        </Drawer>
      </Stack>
    </Stack>
  );
}

export default Nav;
