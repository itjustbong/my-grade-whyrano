import React from 'react';
import { LoginBox } from './Login.component';
import { Layout, Empty } from './Login.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';
import { LoginService } from '../service/service.sign';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnlargeMedal3D } from '../EnlargeMedal3D';

const Login = () => {
  const navigate = useNavigate();
  const loginService = new LoginService();
  useEffect(() => {
    if (loginService.isUserLogged()) {
      navigate('/grade');
    }
  }, []);
  const onLogin = async (id: string, pw: string) => {
    const loginResult = await loginService.fetchLogin({ id, pw });
    if (loginResult === 1) {
      navigate('/grade');
    }
  };
  return (
    <Layout>
      {/* <EnlargeMedal3D /> */}
      <Empty height="6rem" />
      {/* [Todo] 메인 로고 사이즈 가변으로 ㄱㄱ */}
      <MainLogo width={'100%'} />
      <Empty height="6rem" />
      <LoginBox onLogin={onLogin} />
    </Layout>
  );
};

export default Login;
