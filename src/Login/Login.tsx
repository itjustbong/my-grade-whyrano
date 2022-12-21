import React from 'react';
import { Layout, LoginBox, Empty } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';

const Login = () => {
  return (
    <Layout>
      <Empty height="8rem" />
      <MainLogo />
      <Empty height="8rem" />
      <LoginBox />
    </Layout>
  );
};

export default Login;
