import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Stack spacing={3} direction="row">
          <Link
            to="/deposit"
            underline="none"
            style={{ color: '#e60073', textDecoration: 'none' }}
          >
            Deposit
          </Link>
          <Link
            to="/withdraw"
            underline="none"
            style={{ color: '#e60073', textDecoration: 'none' }}
          >
            Withdraw
          </Link>
          <Link
            to="/statement"
            underline="none"
            style={{ color: '#e60073', textDecoration: 'none' }}
          >
            Statement
          </Link>
        </Stack>
      </div>
    </>
  );
}
