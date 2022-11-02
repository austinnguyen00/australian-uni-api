import React, { useState } from 'react';
import UniTable from './UniTable';
import LoadButton from './LoadButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

const UniPage = () => {
  const [universities, setUniversities] = useState([]);

  return (
    <>
      <div className='header'>
        <h1>Australia Universities</h1>
      </div>
      <div className='container'>
        <div className='button-wrapper'>
          <LoadButton setUniversities={setUniversities}></LoadButton>
          <DeleteButton
            universities={universities}
            setUniversities={setUniversities}
          ></DeleteButton>
          <AddButton
            universities={universities}
            setUniversities={setUniversities}
          ></AddButton>
        </div>
        <UniTable universities={universities}></UniTable>
      </div>
    </>
  );
};

export default UniPage;
