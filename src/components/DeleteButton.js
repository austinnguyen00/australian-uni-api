import React from 'react';
import { Button } from '@mui/material';

const DeleteButton = ({ universities, setUniversities }) => {
  // Function to delete last item of the array
  const deleteLastItem = () => {
    if (universities) {
      setUniversities(universities.slice(0, -1));
    } else {
      console.log('No uni found');
    }
  };

  return (
    <Button variant='contained' onClick={deleteLastItem}>
      DELETE
    </Button>
  );
};

export default DeleteButton;
