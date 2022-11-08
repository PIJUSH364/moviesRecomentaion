import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import { json } from 'react-router-dom';
export const Store = createContext();

const initialState = {
  // movies: {
  //   movieItem: [],
  // },

  movies: Cookies.get('movies')
    ? JSON.parse(Cookies.get('movies'))
    : { movieItem: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_MOVIE_PREVIEW': {
      const currentMovie = action.payload;
      state.movies.movieItem = currentMovie;

      // cookies storage
      Cookies.set('movies', JSON.stringify({ ...state.movies }));
      return { ...state, movies: { ...state.movies } };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
