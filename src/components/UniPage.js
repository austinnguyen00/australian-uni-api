import React, { useState } from 'react';
import UniTable from './UniTable';
import LoadButton from './LoadButton';
import DeleteButton from './DeleteButton';

const UniPage = () => {
  const [universities, setUniversities] = useState([]);

  return (
    <>
      <h1>Australia Universities</h1>
      <LoadButton setUniversities={setUniversities}></LoadButton>
      <DeleteButton
        universities={universities}
        setUniversities={setUniversities}
      ></DeleteButton>
      <UniTable universities={universities}></UniTable>
    </>
  );
};

export default UniPage;
