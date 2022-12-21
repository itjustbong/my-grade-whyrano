import { Input, Typography, Button } from 'antd';
import styled from '@emotion/styled';
// Types
type EmptyType = { height: string };

// [Todo] 좀 더 관리 이쁘게 안되나
export const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Empty = styled('div')<EmptyType>`
  height: ${props => `${props.height}`};
`;

export const InputID = () => (
  <>
    <Typography.Text style={{ fontSize: '2rem' }}>ID</Typography.Text>
    <Input
      style={{
        backgroundColor: '#f4f4f4',
        height: '3rem',
        width: '20rem',
        borderRadius: '15px',
      }}
    />
  </>
);

export const InputPW = () => (
  <>
    <Typography.Text style={{ fontSize: '2rem' }}>PW</Typography.Text>
    <Input
      style={{
        backgroundColor: '#f4f4f4',
        height: '3rem',
        width: '20rem',
        borderRadius: '15px',
      }}
      type="password"
    />
  </>
);

export const ButtonLogIn = () => (
  <Button
    style={{
      backgroundColor: '#f4f4f4',
      height: '3rem',
      width: '12rem',
      borderRadius: '15px',
    }}
    form="sign-in"
  >
    로그인 하기
  </Button>
);
