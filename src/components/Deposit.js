import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { deposit, transaction } from '../action/Action';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Deposit() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { amount: '' },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError('Enter only a number')
        .positive("Amount can't be negative")
        .integer("Amount can't be in decimal")
        .min(0)
        .required('Amount is '),
    }),
    onSubmit: (values) => {
      var today = new Date();

      var date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

      var time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

      var dateTime = date + ' ' + time;
      alert(`Amount is Deposited`);
      dispatch(deposit(values.amount));
      const stats = {
        dateTime: dateTime,
        mode: 'CREDIT',
        amount: values.amount,
      };
      console.log(stats);
      dispatch(transaction(stats));
    },
  });
  return (
    <>
      <div>
        <h2>Deposit Money</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            type="number"
            id="standard-basic"
            id="amount"
            name="amount"
            placeholder="₹"
            variant="standard"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Deposit Money
          </Button>
        </form>
      </div>
    </>
  );
}
