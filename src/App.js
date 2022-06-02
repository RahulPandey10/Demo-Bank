import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Statement from './components/Statement';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Card, CardActions } from '@mui/material';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Card>
            <CardActions>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/statement" element={<Statement />} />
              </Routes>
            </CardActions>
          </Card>
        </div>
      </Router>
    </>
  );
}
