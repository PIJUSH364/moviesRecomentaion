import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './searchbar.css';
import { Store } from './Store';
function SearchBar({ placeholder, data }) {
  const { state, dispatch } = useContext(Store);
  const moviePreviwHandeler = (item) => {
    dispatch({ type: 'SHOW_MOVIE_PREVIEW', payload: { ...item } });
    console.log('dispatch done', item);
  };
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
      return e.name.toLowerCase().includes(searchWord.toLowerCase());
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
    <Stack bgcolor="rgba(128, 128, 128, 0.57)" alignItems="center">
      <Stack className="searchbar" direction="row">
        <div className="searchInputs">
          <input
            value={inputvalue}
            type="text"
            placeholder={placeholder}
            style={{
              padding: '1em',
              border: 'none',
              outline: 'none',
            }}
            onChange={handleFilter}
          />
        </div>
        <div className="input--icon">{icon}</div>
      </Stack>
      {filterdata.length != 0 && (
        <Box className="data--result">
          {filterdata.slice(0, 1).map((e, key) => {
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
                  {e.name}
                </p>
              </Link>
            );
          })}
        </Box>
      )}
    </Stack>
  );
}

export default SearchBar;
