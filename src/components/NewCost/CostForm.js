import React, { useState } from 'react';

import './CostForm.css';

const CostForm = (props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (e) => setName(e.target.value);
  const amountChangeHandler = (e) => setAmount(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      name,
      amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Costs</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
