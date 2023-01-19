import CostDate from './CostDate';

import styled from 'styled-components';

const CostItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    flex-flow: column-reverse;
    justify-content: flex-start;
    flex: 1;
  }

  h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: tomato;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #fefae1;
    background-color: tomato;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;
  }

  @media (min-width: 480px) {
    section {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    h2 {
      font-size: 1.25rem;
      white-space: wrap;
    }

    p {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

const CostItem = ({ date, description, amount }) => {
  return (
    <CostItemLi>
      <section>
        <CostDate date={date} />
        <h2>{description}</h2>
        <p>${amount}</p>
      </section>
    </CostItemLi>
  );
};
export default CostItem;
