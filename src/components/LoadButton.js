import React from 'react';
import { Button } from '@mui/material';

const LoadButton = ({ setUniversities }) => {
  // Function to fetching uni API
  const fetchingUni = async () => {
    const response = await fetch(
      'http://universities.hipolabs.com/search?country=Australia'
    );
    const data = await response.json();
    setUniversities(data);
  };

  return (
    <Button variant='contained' onClick={fetchingUni}>
      LOAD
    </Button>
  );
};

export default LoadButton;
