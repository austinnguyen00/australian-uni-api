import React from 'react';
import { Button } from '@mui/material';

const AddButton = ({ universities, setUniversities }) => {
  // Function to add first item to the last of array
  const addFirstItem = () => {
    if (universities.length > 0) {
      console.log('Im here');
      setUniversities(universities.concat(universities[0]));
    } else {
      console.log('No uni found');
    }
  };

  return (
    <Button variant='contained' onClick={addFirstItem}>
      ADD
    </Button>
  );
};

export default AddButton;
