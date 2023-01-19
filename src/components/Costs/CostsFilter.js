import styled from 'styled-components';

const CostsFilterBlock = styled.article`
  color: white;
  padding: 0 1rem;

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;

const CostsFilter = ({ year, onChangeYear }) => {
  const yearChangeHandler = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <CostsFilterBlock>
      <section>
        <label>Выбор По Году</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </section>
    </CostsFilterBlock>
  );
};

export default CostsFilter;
