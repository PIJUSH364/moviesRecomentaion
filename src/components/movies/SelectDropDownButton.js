import { Button, InputBase, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { alpha, styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '8px',
    color: '#fff',
    color: theme.palette.secondary.dark,
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '3px solid #fff',
    fontSize: 16,
    padding: '10px 26px 10px 12px',

    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      outline: '2px solid #fff',
    },
  },
}));
function SelectDropDownButton() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#fff' }}>
          Catagory
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="all">All Gener</MenuItem>
          <MenuItem value="comedy">Comedy</MenuItem>
          <MenuItem value="action">Action</MenuItem>
          <MenuItem value="family">Family</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectDropDownButton;
