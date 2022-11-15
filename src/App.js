import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDeatils from './components/movies/MovieDeatils';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import AllMovies from './components/movies/AllMovies';
import NotFound from './components/NotFound';
import Home from './router/Home';
import About from './router/About';
import NavRoute from './router/NavRoute';
import OrderSummery from './router/OrderSummery';
import NotFoundPage from './router/NotFoundPage';
import Product from './router/Product';
import FeatureProduct from './router/FeatureProduct';
import NewProduct from './router/NewProduct';
import Users from './router/Users';
import UserDeatils from './router/UserDeatils';
import Admin from './router/Admin';
import Demo from './components/Demo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<SingUp />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SingUp />} />
          <Route path="movies/moviedetails" element={<MovieDeatils />} /> */}
        </Route>
        <Route path="moviedetails" element={<MovieDeatils />}>
          <Route path=":movieItem" element={<MovieDeatils />} />
        </Route>
        {/* <Route path="movies" element={<AllMovies />}>
          <Route path="moviedetails" element={<MovieDeatils />} />
        </Route>
        <Route path="/moviedetails" element={<MovieDeatils />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <>
   
        <NavRoute />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="order_summery" element={<OrderSummery />}></Route>
          <Route path="product" element={<Product />}>
            <Route index element={<NewProduct />}></Route>
            <Route path="feature_product" element={<FeatureProduct />}></Route>
            <Route path="new_product" element={<NewProduct />}></Route>
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDeatils />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </> */}
    </>
  );
}
export default App;
