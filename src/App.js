import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDeatils from './components/movies/MovieDeatils';
import MovieSummay from './components/movies/MovieSummay';
import Sorting from './components/movies/Sorting';
import Nav from './components/nav/Nav';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import AllMovies from './components/movies/AllMovies';
import SelectButton from './components/movies/SelectButton';
import ActorDeatils from './components/movies/ActorDeatils';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<ActorDeatils />}> */}
        <Route index element={<SingUp />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SingUp />} />
      </Route>
      {/* <Route path="/movies" element={<MovieDeatils />} /> */}
      {/* <Route path="/" element={<MovieSummay />} /> */}
      <Route path="/movies" element={<AllMovies />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/mv" element={<MovieDeatils />} />
    </Routes>
  );
}
export default App;
