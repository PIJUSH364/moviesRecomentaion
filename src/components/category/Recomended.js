import React from 'react';
import MoviesItem from './MoviesItem';

function Recomended() {
  return (
    <div className="recomended--container">
      <div className="top--rated">
        <h3>Top rated</h3>
        <div className="top--ratedAll" style={{ display: 'flex', gap: '1em' }}>
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />
        </div>
      </div>
      <div className="most--recent">
        <h3>most recent</h3>
        <div className="mostRecentAll" style={{ display: 'flex', gap: '1em' }}>
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />
        </div>
      </div>
      <div className="popularity">
        <h3>popularity</h3>
        <div className="popularityAll" style={{ display: 'flex', gap: '1em' }}>
          <MoviesItem /> <MoviesItem /> <MoviesItem /> <MoviesItem />
        </div>
      </div>
    </div>
  );
}

export default Recomended;
