import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid tomato;
  background-color: tomato;
  color: #fefae1;
  border-radius: 10px;
  margin-right: 3px;
  margin-bottom: 3px;
  transition: all 0.3s ease 0s;
  &:hover,
  &:active {
    background-color: transparent;
    color: tomato;
  }
  @media (max-width: 430px) {
    padding: 0.5rem 0.5rem;
  } ;
`;
export default Button;
