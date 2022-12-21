import React from 'react';
import { Layout, LoginBox, Empty } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';
import { postSignIn } from './api/sign';

const Login = () => {
  return (
    <Layout>
      <Empty height="6rem" />
      {/* [Todo] 메인 로고 사이즈 가변으로 ㄱㄱ */}
      <MainLogo />
      <Empty height="6rem" />
      <LoginBox />
    </Layout>
  );
};

export default Login;
