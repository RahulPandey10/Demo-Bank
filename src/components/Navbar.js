import React from 'react';
import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Navbar() {
  return (
    <>
      <AppBar position="static" sx={{ background: '#063970' }}>
        <Toolbar>
          <Link to="/" style={{ color: 'white' }}>
            <AccountBalanceIcon />
          </Link>
          <h2>&nbsp;Bank</h2>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
