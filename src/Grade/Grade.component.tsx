import { HeaderArea, HeaderFont, HeaderUserInfoFont } from './Grade.styled';

const Header = () => {
  return (
    <HeaderArea>
      <HeaderFont>두근 두근 내 학점</HeaderFont>
      <HeaderUserInfoFont>20170368님</HeaderUserInfoFont>{' '}
      <HeaderUserInfoFont>안녕하세요</HeaderUserInfoFont>
    </HeaderArea>
  );
};

export { Header };
