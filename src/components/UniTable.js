import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UniTable = ({ universities }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='table-head'>University</TableCell>
            <TableCell className='table-head' align='right'>
              Code
            </TableCell>
            <TableCell className='table-head' align='right'>
              Country
            </TableCell>
            <TableCell className='table-head' align='right'>
              Web Pages
            </TableCell>
            <TableCell className='table-head' align='right'>
              Domains
            </TableCell>
          </TableRow>
        </TableHead>
        {universities.length > 0 ? (
          <TableBody>
            {universities.map((university, index) => (
              <TableRow
                key={university.name + '-' + index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {university['name']}
                </TableCell>
                <TableCell align='right'>{university.alpha_two_code}</TableCell>
                <TableCell align='right'>{university.country}</TableCell>

                <TableCell align='right'>
                  {university.web_pages.join(', ')}
                </TableCell>
                <TableCell align='right'>
                  {university.domains.join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          ''
        )}
      </Table>
    </TableContainer>
  );
};

export default UniTable;
