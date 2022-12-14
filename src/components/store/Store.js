import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import { json } from 'react-router-dom';
export const Store = createContext();

const initialState = {
  // movies: {
  //   movieItem: [],
  //   favMovie: [
  //     {
  //       x: 9,
  //       t: 'yu',
  //     },
  //   ],
  // },
  auth: 'login',
  // auth:Cookies.get('auth'),

  movies: Cookies.get('movies')
    ? JSON.parse(Cookies.get('movies'))
    : {
        movieItem: [],
        favMovie: [{}],
      },
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

    case 'ADD_TO_FAV': {
      const currentFavMovie = action.payload;
      state.movies.favMovie = [{...currentFavMovie}];

      // cookies storage
      Cookies.set('movies', JSON.stringify({ ...state.movies }));
      return { ...state, movies: { ...state.movies } };
    }
    case 'Auth_CHECKING': {
      const currentAuth = action.payload;
      state.auth = currentAuth;

      // cookies storage
      Cookies.set('auth', JSON.stringify({ ...state.auth }));
      return { ...state, auth: { ...state.auth } };
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
