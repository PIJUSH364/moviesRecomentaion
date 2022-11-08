import { Box, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
import FormButton from '../movies/FormButton';
// import { withStyles } from 'material-ui/styles';
// import withRoot from '../components/withRoot';

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

function SingUp() {
  return (
    <>
      <Stack className="login--container" p={5}>
        <Box>
          <Typography variant="h6" textAlign="left" gutterBottom mt={4}>
            Signup for free!
          </Typography>
          <Stack component="form" noValidate gap={3}>
            <CssTextField label="Email" id="custom-css-outlined-input" />
            <CssTextField label="fullName" id="custom-css-outlined-input" />
            <CssTextField label="PassWord " id="custom-css-outlined-input" />
            <CssTextField
              label="PassWord confirmation"
              id="custom-css-outlined-input"
            />
            <FormButton body="Create Your Account !" icon={LoginIcon} />
          </Stack>
        </Box>
        <Typography variant="body1" textAlign="left" mt={3}>
          Sign in Your account !
        </Typography>
        <Typography variant="body2" textAlign="right" mt={3}>
          Privicy Policy!
        </Typography>
      </Stack>
    </>
  );
}

export default SingUp;
