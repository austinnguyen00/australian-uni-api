import React from 'react';
import { Button } from '@mui/material';

const DeleteButton = ({ universities, setUniversities }) => {
  const deleteLastItem = () => {
    if (universities) {
      setUniversities(universities.slice(0, -1));
    } else {
      console.log('No uni found');
    }
  };

  // const table = document.getElementsByTagName('table')[0];
  // console.log('Uni init:', universities);

  // if (table) {
  //   console.log(table);
  //   console.log('Uni:', universities[universities.length - 1]);
  // } else {
  // }

  return (
    <Button variant='contained' onClick={deleteLastItem}>
      DELETE
    </Button>
  );
};

export default DeleteButton;
