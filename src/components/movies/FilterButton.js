import React, { useEffect } from 'react';

function FilterButton({ data, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(data);
      return;
    }
    const filterData = data.filter((e) => {
      return e.genre_ids.includes(activeGenre);
    });
    setFiltered(filterData);
  }, [activeGenre]);

  return (
    <>
      <button onClick={() => setActiveGenre(0)}>all</button>
      <button onClick={() => setActiveGenre(35)}>comedy</button>
      <button onClick={() => setActiveGenre(28)}>action</button>
    </>
  );
}

export default FilterButton;
