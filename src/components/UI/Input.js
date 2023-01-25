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
  return (
    <InputBlockStyled>
      <label>{props.label}</label>
      <input
        {...props.input}
        className={`${props.valid === false ? 'invalid' : ''}`}
      />
    </InputBlockStyled>
  );
};

export default InputBlock;
