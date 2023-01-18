import React, { useState } from 'react';

import CostForm from './CostForm';

import './NewCost.css';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const openFormHandler = () => {
    setIsFormVisible(true);
  };
  const closeFormHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={openFormHandler}>Add a new expense</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onClose={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
