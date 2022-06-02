import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { TableContainer } from '@mui/material';

export default function Statement() {
  const trans = useSelector((state) => state.transaction);
  const style = {
    marginLeft: '10px',
  };
  return (
    <>
      <div style={style}>
        <h1>Statement</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">When</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Amount(₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trans.map((transaction, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">{transaction.dateTime}</TableCell>
                    <TableCell align="right">{transaction.mode}</TableCell>
                    <TableCell align="right">{transaction.amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Stack spacing={3} direction="row">
          <Link
            to="/deposit"
            underline="none"
            style={{ color: '#063970', textDecoration: 'none' }}
          >
            Deposit
          </Link>
          <Link
            to="/withdraw"
            underline="none"
            style={{ color: '#063970', textDecoration: 'none' }}
          >
            Withdraw
          </Link>
        </Stack>
      </div>
    </>
  );
}
