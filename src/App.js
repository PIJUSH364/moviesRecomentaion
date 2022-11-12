import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDeatils from './components/movies/MovieDeatils';
import MovieSummay from './components/movies/MovieSummay';
import Sorting from './components/movies/Sorting';
import Nav from './components/nav/Nav';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SingUp/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SingUp />} />
      </Route>
      <Route path="/movies" element={<MovieDeatils />} />
      {/* <Route path="/" element={<MovieSummay />} /> */}
      {/* <Route path="/moviePreview" element={<MovieDeatils />} /> */}
      {/* <Route path="/" element={<Sorting />} /> */}
    </Routes>
  );
}
export default App;
