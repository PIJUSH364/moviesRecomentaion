import React from 'react';
import { Link } from 'react-router-dom';
import './store/notFound.css';
function NotFound() {
  return (
    <div className="container_notfound">
      <h1 className='notfound_title'>404</h1>
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div class="info">
        <h2>We can't find that page</h2>
        <p className='notfound_description'>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <Link to="/" className='notfound_home'>Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
