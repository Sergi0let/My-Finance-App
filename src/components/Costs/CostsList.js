import styled from 'styled-components';
import CostItem from './CostItem';

const CostsListBlock = styled.ul`
  list-style: none;
  padding: 0;
`;

const CostsTitleBlock = styled.h2`
  color: #fefae1;
  text-align: center;
`;

const CostsList = ({ costs }) => {
  if (costs.length === 0) {
    return <CostsTitleBlock>You didn't buy anything</CostsTitleBlock>;
  }
  return (
    <CostsListBlock>
      {costs.map(({ id, date, description, amount }) => (
        <CostItem
          key={id}
          date={date}
          description={description}
          amount={amount}
        />
      ))}
    </CostsListBlock>
  );
};

export default CostsList;
