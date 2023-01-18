import React, { useState } from 'react';

import './CostForm.css';

const CostForm = (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (e) => setDescription(e.target.value);
  const amountChangeHandler = (e) => setAmount(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description,
      amount,
      date: new Date(date),
    };
    if (description && amount && date) {
      props.onSaveCostData(costData);
      setDescription('');
      setAmount('');
      setDate('');
      props.onClose();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={description} />
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
          <button type="submit" onClick={props.onClose}>
            Close Costs
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
