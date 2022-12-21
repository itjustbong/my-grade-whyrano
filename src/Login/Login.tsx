import React from 'react';
import { Input } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';

const Login = () => {
  return (
    <div>
      로그인 화면
      <MainLogo />
      <Input />
    </div>
  );
};

export default Login;
