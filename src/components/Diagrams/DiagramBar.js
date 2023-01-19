import styled from 'styled-components';

const DiagramBarSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    height: 100%;
    width: 100%;

    border-radius: 12px;
    background-color: #fefae1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .fill {
    background-color: tomato;
    width: 100%;
    transition: all 0.3s ease-out;
  }

  h2 {
    font-weight: bold;
    font-size: 0.6rem;
    text-align: center;
  }
`;

const DiagramBar = (props) => {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <DiagramBarSection>
      <div className="diagram-bar__inner">
        <div className="fill" style={{ height: barFillHeight }}></div>
      </div>
      <h2 className="diagram-bar__label">{props.label}</h2>
    </DiagramBarSection>
  );
};

export default DiagramBar;
