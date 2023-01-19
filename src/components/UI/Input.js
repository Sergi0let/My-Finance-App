import styled from 'styled-components';

const InputBlock = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: white;
  }

  input {
    font: inherit;

    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;
export default InputBlock;
