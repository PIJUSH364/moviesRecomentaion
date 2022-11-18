import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDeatils from './components/movies/MovieDeatils';
import AllMovies from './components/movies/AllMovies';
import NotFound from './components/NotFound';
import Favorite from './components/addToCart/Favorite';
import AllShows from './components/shows/AllShows';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="movies" element={<AllMovies />}></Route>
        <Route path="moviedetails/:id" element={<MovieDeatils />}></Route>
        <Route
          path="movies/moviedetails/:id"
          element={<MovieDeatils />}
        ></Route>
        {/* <Route path="shows" element={<AllShows />}></Route> */}
        <Route path="mylist" element={<Favorite />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
