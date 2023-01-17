import React, { useState } from 'react';

import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: 'Refrigerator',
      amount: '999.99',
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: '1254.73',
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 1),
      description: 'Jeans',
      amount: '49.99',
    },
  ];

  // const [yearFilter, setYearFilter] = useState('2023');

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('app component');
  };

  // const addYearHandler = (year) => {
  //   setYearFilter(year);
  //   console.log(yearFilter);
  // };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
