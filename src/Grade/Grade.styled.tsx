import styled from '@emotion/styled';

const HeaderArea = styled.div`
  padding-top: 1rem;
  height: 10rem;
  text-align: center;
`;

const HeaderFont = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const HeaderUserInfoFont = styled.span`
  font-size: 0.75rem;
`;

const FlotingButton = styled.div`
  width: 3rem;
  height: 3rem;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  position: fixed;
`;

const LogoutText = styled.div`
  text-decoration: underline;
  text-align: center;
  color: gray;
`;

export {
  HeaderArea,
  HeaderFont,
  HeaderUserInfoFont,
  FlotingButton,
  LogoutText,
};
