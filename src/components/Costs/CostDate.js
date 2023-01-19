import styled from 'styled-components';

const CostBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: tomato;
  color: #fefae1;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  .month {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .year {
    font-size: 0.75rem;
  }

  .day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const CostDate = ({ date }) => {
  const getDateParam = (date, period, type) =>
    date.toLocaleString('en-En', { [period]: type });

  return (
    <CostBlock>
      <div className="month">{getDateParam(date, 'month', 'long')}</div>
      <div className="year">{getDateParam(date, 'year', 'numeric')}</div>
      <div className="day">{getDateParam(date, 'day', '2-digit')}</div>
    </CostBlock>
  );
};
export default CostDate;
