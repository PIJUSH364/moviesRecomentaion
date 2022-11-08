import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDeatils from './components/movies/MovieDeatils';
import MovieSummay from './components/movies/MovieSummay';
import Sorting from './components/movies/Sorting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/movies" element={<MovieDeatils />} />
        {/* <Route path="/" element={<MovieSummay />} /> */}
        <Route path="/moviePreview" element={<MovieDeatils />} />
        {/* <Route path="/" element={<Sorting />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
