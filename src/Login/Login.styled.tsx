import { Input as aInput, Button as aButton } from 'antd';
import styled from '@emotion/styled';

// Types
type EmptyType = { height: string };

export const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Empty = styled('div')<EmptyType>`
  height: ${props => `${props.height}`};
`;

export const Input = styled(aInput)`
  background-color: #f4f4f4;
  height: 3rem;
  width: 20rem;
  border-radius: 15px;
`;

// [Todo] 로그인 하기 font 설정하기
export const Button = styled(aButton)`
  background-color: #f4f4f4;
  height: 3rem;
  width: 12rem;
  border-radius: 15px;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
