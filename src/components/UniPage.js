import React, { useState } from 'react';
import UniTable from './UniTable';
import LoadButton from './LoadButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

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
      <AddButton
        universities={universities}
        setUniversities={setUniversities}
      ></AddButton>
      <UniTable universities={universities}></UniTable>
    </>
  );
};

export default UniPage;
