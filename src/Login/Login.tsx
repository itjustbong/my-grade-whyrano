import React from 'react';
import { LoginBox } from './Login.component';
import { Layout, Empty } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';
import { postSignIn } from '../api/sign';

const Login = () => {
  const onLogin = (id: string, pw: string) => {
    postSignIn({ id, pw })
      .then(res => res)
      .catch(err => err);
  };
  return (
    <Layout>
      <Empty height="6rem" />
      {/* [Todo] 메인 로고 사이즈 가변으로 ㄱㄱ */}
      <MainLogo />
      <Empty height="6rem" />
      <LoginBox onLogin={onLogin} />
    </Layout>
  );
};

export default Login;
