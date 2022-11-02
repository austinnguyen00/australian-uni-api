import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UniTable = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchingUni = async () => {
      const response = await fetch(
        'http://universities.hipolabs.com/search?country=Australia'
      );
      const data = await response.json();
      console.log('data:', data);
      setUniversities(data);
    };

    fetchingUni();
    console.log('uni:', universities);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>University</TableCell>
            <TableCell align='right'>Code</TableCell>
            <TableCell align='right'>Country</TableCell>
            <TableCell align='right'>State</TableCell>
            <TableCell align='right'>Web Page</TableCell>
            <TableCell align='right'>Domains</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map((university) => (
            <TableRow
              key={university.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {university['name']}
              </TableCell>
              <TableCell align='right'>{university.alpha_two_code}</TableCell>
              <TableCell align='right'>{university.country}</TableCell>
              <TableCell align='right'>
                {university['state-province']}
              </TableCell>
              <TableCell align='right'>{university.web_pages}</TableCell>
              <TableCell align='right'>{university.domains}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UniTable;