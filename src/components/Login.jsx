import React from 'react';
import '../styles/Login.css';
import { loginUrl } from '../spotify';

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};

export default Login;
