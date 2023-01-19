import { useState } from 'react';

import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const INITIAL_COSTS = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: 'Refrigerator',
      amount: '999.99',
    },
    {
      id: 'c2',
      date: new Date(2023, 11, 25),
      description: 'MacBook',
      amount: '1254.73',
    },
    {
      id: 'c3',
      date: new Date(2023, 4, 1),
      description: 'Jeans',
      amount: '49.99',
    },
    {
      id: 'c4',
      date: new Date(2023, 3, 6),
      description: 'Laptop',
      amount: '700.99',
    },
    {
      id: 'c5',
      date: new Date(2023, 2, 23),
      description: 'Snickers',
      amount: '149.99',
    },
    {
      id: 'c6',
      date: new Date(2023, 4, 1),
      description: 'Presents',
      amount: '400',
    },
  ];

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('app component');
    setCosts(() => [cost, ...costs]);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
