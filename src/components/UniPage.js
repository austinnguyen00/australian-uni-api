import React, { useState, useEffect } from 'react';
import UniTable from './UniTable';
import LoadButton from './LoadButton';

const UniPage = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchingUni = async () => {
      const response = await fetch(
        'http://universities.hipolabs.com/search?country=Australia'
      );
      const data = await response.json();
      setUniversities(data);
    };

    fetchingUni();
  }, []);

  return (
    <>
      <h1>Australia Universities</h1>
      <LoadButton></LoadButton>
      <UniTable universities={universities}></UniTable>
    </>
  );
};

export default UniPage;
