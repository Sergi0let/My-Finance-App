import React, { useState } from 'react';

import CostItem from './CostItem';
import CostsFilter from './CostsFilter';
import Card from '../UI/Card';

import './Costs.css';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  let costsContent = <p>You didn't buy anything</p>;

  if (filteredCosts.length > 0) {
    costsContent = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }
  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
      {costsContent}
    </Card>
  );
};
export default Costs;
