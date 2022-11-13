import { Box } from '@mui/material';
import React, { useState } from 'react';
import Login from '../auth/Login';
import ContactUs from './ContactUs';
import PrivicyPolicy from './PrivicyPolicy';
import SingUp from './SingUp';
function RenderAuth() {
  const [authRenderValue, setAuthRenderValue] = useState(0);
  return (
    <>
      <Box
        className={`auth_shown ${authRenderValue === 0 ? '' : 'auth_hidden'}`}
      >
        <Login setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 1 ? '' : 'auth_hidden'}`}
      >
        <SingUp setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 2 ? '' : 'auth_hidden'}`}
      >
        <PrivicyPolicy setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 3 ? '' : 'auth_hidden'}`}
      >
        <ContactUs setAuthRenderValue={setAuthRenderValue} />
      </Box>
    </>
  );
}

export default RenderAuth;
