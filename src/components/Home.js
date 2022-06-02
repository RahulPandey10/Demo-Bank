import React from 'react';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';

export default function Home() {
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <div>
        <p>Hello Users</p>
        <h2>Your Balance is ₹{amount}</h2>
        <Buttons />
      </div>
    </>
  );
}
