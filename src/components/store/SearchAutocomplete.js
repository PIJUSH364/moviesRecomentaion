import React, { useContext } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import data from './data';
import { Link } from 'react-router-dom';
import { Store } from './Store';

// note: the id field is mandatory
const items = data.map((e) => e);

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results);
};

const handleOnHover = (result) => {
  // the item hovered
  // console.log(result);
};

const handleOnSelect = (item) => {
  // the item selected
  // console.log(item);
};

const handleOnFocus = () => {
  // console.log('Focused');
};

const formatResult = (item) => {
  return (
    <>
      <span
        style={{ display: 'block', textAlign: 'left' }}
        onClick={() => moviePreviwHandeler(item)}
      >
        {item.name}
      </span>
    </>
  );
};
{
  /* <Link to="moviePreview"> */
}
function SearchAutocomplete() {
  const { state, dispatch } = useContext(Store);
  const { movies } = state;
  const { movieItem } = movies;
  console.log('moviessearch--', movieItem);
  const moviePreviwHandeler = (item) => {
    dispatch({ type: 'SHOW_MOVIE_PREVIEW', payload: { ...item } });
    console.log('dispatch done');
  };
  return (
    <div>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}

export default SearchAutocomplete;
