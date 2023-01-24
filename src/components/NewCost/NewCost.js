import React, { useState } from 'react';

import CostForm from './CostForm';

import Button from '../UI/Button';
import Block from '../UI/Block';
import background from '../../img/banknotes.jpg';

import styled from 'styled-components';

const Controls = styled.div`
  position: relative;
  & :last-child {
    position: absolute;
    right: 0;
  }
`;

const NewCost = ({ onAddCost, onlogOut }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
  };

  const openFormHandler = () => {
    setIsFormVisible(true);
  };
  const closeFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <Block
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {!isFormVisible && (
        <Controls>
          <Button onClick={openFormHandler}>Add a new expense</Button>
          <Button onClick={() => onlogOut()}>Logout</Button>
        </Controls>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onClose={closeFormHandler}
        />
      )}
    </Block>
  );
};

export default NewCost;
