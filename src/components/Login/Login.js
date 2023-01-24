import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import Block from '../UI/Block';
import Button from '../UI/Button';
import InputBlock from '../UI/Input';

import background from '../../img/dollar-banknotes-background.jpg';

const LoginBlock = styled.form`
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 3rem;

  text-align: center;

  button {
    margin-top: 1em;
  }
`;

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {
        ...state,
        emailInput: action.emailInput,
        isEmailValid: action.emailInput.includes('@'),
      };
    case 'ADD_PASS':
      return {
        ...state,
        passInput: action.passInput,
        isPassValid: action.passInput.trim().length >= 4,
      };
    case 'EMAIL_VALID':
      return {
        ...state,
        emailInput: state.emailInput,
        isEmailValid: state.emailInput.includes('@'),
      };
    case 'PASS_VALID':
      return {
        ...state,
        passInput: state.passInput,
        isPassValid: state.passInput.trim().length >= 4,
      };
    default:
      return {
        emailInput: '',
        passInput: '',
        isEmailValid: true,
        isPassValid: true,
      };
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    emailInput: '',
    passInput: '',
    isEmailValid: undefined,
    isPassValid: undefined,
  });

  const { isEmailValid, isPassValid } = formState;

  useEffect(() => {
    console.log('useEfect');
    setFormIsValid(isEmailValid && isPassValid);
  }, [isEmailValid, isPassValid]);

  const nameChangeHandler = (e) => {
    dispatchFormState({ type: 'ADD_EMAIL', emailInput: e.target.value });
  };

  const passChangeHandler = (e) => {
    dispatchFormState({ type: 'ADD_PASS', passInput: e.target.value });
  };

  const emailIsValid = () => {
    dispatchFormState({ type: 'EMAIL_VALID' });
  };

  const passIsValid = () => {
    dispatchFormState({ type: 'PASS_VALID' });
  };

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('sumtin');
    props.onLoggIn();
  };

  return (
    <Block
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <LoginBlock onSubmit={submitHandler}>
        <InputBlock
          isValid={formState.isEmailValid}
          label="Email"
          onChange={nameChangeHandler}
          value={formState.emailInput}
          onBlur={emailIsValid}
        />
        <InputBlock
          isValid={formState.isPassValid}
          id="password"
          label="Password"
          type="password"
          onChange={passChangeHandler}
          value={formState.passInput}
          onBlur={passIsValid}
        />
        <Button type="submit" disabled={!formIsValid}>
          Submit
        </Button>
      </LoginBlock>
    </Block>
  );
};

export default Login;