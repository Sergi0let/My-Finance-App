import styled from 'styled-components';
import DiagramBar from './DiagramBar';

const DiagramBlock = styled.article`
  padding: 1rem;
  border-radius: 12px;
  background-color: #d8f3f9;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Diagram = ({ dataSets }) => {
  const dataSetsValue = dataSets.map((cost) => cost.value);
  const maxMonthCosts = Math.max(...dataSetsValue);

  return (
    <DiagramBlock>
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </DiagramBlock>
  );
};

export default Diagram;
