const Transaction = (current = 5000, action) => {
  switch (action.type) {
    case 'deposit':
      return current + action.payload;
    case 'withdraw':
      return current - action.payload;
    default:
      return current;
  }
};
export default Transaction;
