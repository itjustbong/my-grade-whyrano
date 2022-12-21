import { HeaderArea, HeaderFont, HeaderUserInfoFont } from './Grade.styled';
import { ReactComponent as MainLogo } from '../assets/main_logo.svg';

const Header = () => {
  return (
    <HeaderArea>
      <MainLogo height={'5rem'} width={'100%'} />
      <br />
      <HeaderUserInfoFont>20170368님</HeaderUserInfoFont>{' '}
      <HeaderUserInfoFont>안녕하세요</HeaderUserInfoFont>
    </HeaderArea>
  );
};

export { Header };
