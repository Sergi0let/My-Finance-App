import React, { useState } from 'react';

import CostsFilter from './CostsFilter';
import CostsDiagram from './CostsDiagram';
import CostsList from './CostsList';

import Block from '../UI/Block';
import background from '../../img/dollar-banknotes-background.jpg';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <Block
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
      <CostsDiagram costs={filteredCosts} />
      <CostsList costs={filteredCosts} />
    </Block>
  );
};
export default Costs;
