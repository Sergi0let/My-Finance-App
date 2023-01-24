import styled from 'styled-components';

const InputBlockStyled = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: tomato;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;

    @media (max-width: 400px) {
      width: 13rem;
    }

    &:focus {
      color: tomato;
    }
  }
`;

const InputBlock = (props) => {
  const textInput = (
    <input type={props.type} onChange={props.onChange} value={props.value} />
  );
  const amountInput = (
    <input
      min="0.01"
      step="0.01"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    />
  );
  const dateInput = (
    <input
      min="2022-01-01"
      step="2023-12-31"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    />
  );
  let inputType = textInput;

  return (
    <InputBlockStyled>
      <label>{props.label}</label>
      {props.type === 'number'
        ? (inputType = amountInput)
        : props.type === 'date'
        ? (inputType = dateInput)
        : inputType}
    </InputBlockStyled>
  );
};
export default InputBlock;
