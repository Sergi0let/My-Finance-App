import React, { useState } from 'react';

import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostsList from './CostsList';

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

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
      <CostsList costs={filteredCosts} />
    </Card>
  );
};
export default Costs;
