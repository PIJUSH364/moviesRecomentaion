import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './searchbar.css';

function SearchBar({ placeholder, data }) {
  data.map((e, key) => {
    console.log(key, e.title.toLowerCase());
  });
  const [filterdata, setFilterdata] = useState([]);
  const [inputvalue, setInputvalue] = useState('');
  const [icon, setIcon] = useState(<SearchIcon />);

  const handleClear = () => {
    setInputvalue('');
    setFilterdata([]);
    setIcon(<SearchIcon />);
  };

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setInputvalue(searchWord);
    const newFilterData = data.filter((e) => {
      return e.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilterdata([]);
      setIcon(<SearchIcon />);
    } else {
      setFilterdata(newFilterData);
      setIcon(<CloseIcon onClick={handleClear} />);
    }
  };

  return (
    <Box width="100%">
      <Stack
        className="searchbar"
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Box
          className="searchInputs"
          sx={{
            backgroundColor: '#fff',
          }}
        >
          <input
            value={inputvalue}
            type="text"
            placeholder={placeholder}
            style={{
              padding: '0.7rem',
              border: 'none',
              outline: 'none',
            }}
            onChange={handleFilter}
          />{' '}
          <Box className="input--icon">{icon}</Box>
        </Box>
      </Stack>
      {filterdata.length != 0 && (
        <Stack
          className="data--result"
          style={{
            zIndex: '1000',
            position: 'absolute',
          }}
        >
          {filterdata.slice(0, 2).map((e, key) => {
            return (
              <Link
                to="movies"
                key={key}
                onClick={() => moviePreviwHandeler(e)}
              >
                <p
                  className="movie--name"
                  key={key}
                  onClick={() => moviePreviwHandeler(e)}
                >
                  {e.title}
                </p>
              </Link>
            );
          })}
        </Stack>
      )}
    </Box>
  );
}

export default SearchBar;
