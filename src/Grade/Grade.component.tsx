import { FlotingButton, HeaderArea, HeaderUserInfoFont } from './Grade.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';
import { LoginService } from '../service/service.sign';

const Header = () => {
  const user = new LoginService();
  return (
    <HeaderArea>
      <MainLogo height={'5rem'} width={'100%'} />
      <br />
      <HeaderUserInfoFont>{user.get().studentId}님</HeaderUserInfoFont>{' '}
      <HeaderUserInfoFont>안녕하세요</HeaderUserInfoFont>
    </HeaderArea>
  );
};

const BottomFlotingButton = () => {
  return (
    <FlotingButton onClick={() => location.reload()}>
      <img src="/img/refresh.png" width={'100%'} />
    </FlotingButton>
  );
};

export { Header, BottomFlotingButton };
