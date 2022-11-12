import { Box, Stack, Typography, TextField } from '@mui/material';
import React, { useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
import FormButton from '../movies/FormButton';
import { Link } from 'react-router-dom';
import { Store } from '../store/Store';
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
  const { state, dispatch } = useContext(Store);
  const { auth } = state;
  console.log('auth signup', { auth });
  console.log(typeof auth);

  const authHandeler = () => {
    const login = 'log__in';
    // console.log('pre', { auth });
    dispatch({ type: 'Auth_CHECKING', payload: [login] });
    // console.log('auth handeler');
    // console.log('post', auth[0]);
  };
  return (
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
      <Link to="/">
        <Typography
          variant="body1"
          textAlign="left"
          mt={3}
          onClick={authHandeler}
        >
          Sign in Your account !
        </Typography>
      </Link>
      <Typography variant="body2" textAlign="right" mt={3}>
        Privicy Policy!
      </Typography>
    </Stack>
  );
}

export default SingUp;
