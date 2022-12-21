import React from 'react';
import { Layout, LoginBox, Empty } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';

const Login = () => {
  return (
    <Layout>
      <Empty height="6rem" />
      <MainLogo />
      <Empty height="6rem" />
      <LoginBox />
    </Layout>
  );
};

export default Login;
