import {
  FlotingButton,
  HeaderArea,
  HeaderFont,
  HeaderUserInfoFont,
} from './Grade.styled';
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

const BottomFlotingButton = () => {
  return (
    <FlotingButton>
      <img src="/img/refresh.png" width={'100%'} />
    </FlotingButton>
  );
};

export { Header, BottomFlotingButton };
