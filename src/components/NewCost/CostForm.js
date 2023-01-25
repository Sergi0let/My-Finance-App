import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import InputBlock from '../UI/Input';

const ActionsBlocks = styled.div`
  text-align: left;
`;
const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const CostForm = ({ onSaveCostData, onClose }) => {
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
      onSaveCostData(costData);
      setDescription('');
      setAmount('');
      setDate('');
      onClose();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Controls>
        <InputBlock
          // type="text"
          // label="Name"
          // onChange={nameChangeHandler}
          // value={description}
          label="Name"
          input={{
            type: 'text',
            value: description,
            onChange: nameChangeHandler,
          }}
        />
        <InputBlock
          label="Name"
          input={{
            min: '0.01',
            step: '0.01',
            type: 'number',
            value: amount,
            onChange: amountChangeHandler,
          }}
        />
        <InputBlock
          label="Date"
          input={{
            min: '2022-01-01',
            step: '2023-12-31',
            type: 'date',
            value: date,
            onChange: dateChangeHandler,
          }}
        />
        {/* <InputBlock
          type="number"
          label="Amount"
          onChange={amountChangeHandler}
          value={amount}
        />
        <InputBlock
          type="date"
          label="Date"
          onChange={dateChangeHandler}
          value={date}
        /> */}

        <ActionsBlocks>
          <Button type="submit">Add Costs</Button>
          <Button type="submit" onClick={onClose}>
            Close Costs
          </Button>
        </ActionsBlocks>
      </Controls>
    </form>
  );
};

export default CostForm;
