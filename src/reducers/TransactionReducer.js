const initial = [
  {
    dateTime: '2022-4-4 14:23:36',
    mode: 'INITIAL',
    amount: 5000,
  },
];
const transactionReducer = (current = initial, action) => {
  switch (action.type) {
    case 'transaction':
      return current.concat(action.payload);
    default:
      return current;
  }
};

export default transactionReducer;
