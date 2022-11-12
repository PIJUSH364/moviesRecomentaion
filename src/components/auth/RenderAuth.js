import React, { useContext } from 'react';
import Login from '../auth/Login';
import { Store } from '../store/Store';
import SingUp from './SingUp';
function RenderAuth() {
  const { state, dispatch } = useContext(Store);
  const { auth } = state;
  return (
    <>
      {/* <Login /> */}
      <SingUp />
    </>
  );
}

export default RenderAuth;
