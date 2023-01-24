import React, { useState, useEffect } from 'react';

import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import Login from './components/Login/Login';

import { INITIAL_COSTS } from './gateways';

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const [isLogginIn, setIsLogginIn] = useState(false);

  useEffect(() => {
    const localLogIn = localStorage.getItem('isLoggedIn');
    if (localLogIn === '1') {
      setIsLogginIn(true);
    }
  }, []);

  const logInHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLogginIn(true);
  };

  const logOutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLogginIn(false);
  };

  const addCostHandler = (cost) => {
    setCosts(() => [cost, ...costs]);
  };

  return (
    <div>
      {!isLogginIn ? (
        <Login
          isLogginIn={isLogginIn}
          onLoggIn={logInHandler}
          onLogOut={logOutHandler}
        />
      ) : (
        <>
          <NewCost onAddCost={addCostHandler} />
          <Costs costs={costs} />
        </>
      )}
    </div>
  );
};

export default App;
