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

    &:focus {
      color: tomato;
      outline: none;
      border-color: #0649a0;
      background: #94bcf0;
    }
  }
  .invalid {
    border-color: red;
    background: #dfc1c1;
  }
`;

const InputBlock = (props) => {
  const textInput = (
    <input
      className={`${props.isValid === false ? 'invalid' : ''}`}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
    />
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
  const passwordInput = (
    <input
      className={`${props.isValid === false ? 'invalid' : ''}`}
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
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
        : props.type === 'password'
        ? (inputType = passwordInput)
        : inputType}
    </InputBlockStyled>
  );
};
export default InputBlock;
