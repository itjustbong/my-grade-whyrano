import { Input, Typography, Button } from 'antd';
import styled from '@emotion/styled';

// Types
type EmptyType = { height: string };

// [Todo] 좀 더 관리 이쁘게 안되나
const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const Empty = styled('div')<EmptyType>`
  height: ${props => `${props.height}`};
`;

/* [Todo] 다시 리펙토링 */
function LoginBox(): JSX.Element {
  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography.Text style={{ fontSize: '2rem' }}>ID</Typography.Text>
        <Input
          style={{
            backgroundColor: '#f4f4f4',
            height: '3rem',
            width: '20rem',
            borderRadius: '15px',
          }}
        />
        <Empty height="1rem" />
        <Typography.Text style={{ fontSize: '2rem' }}>PW</Typography.Text>
        <Input
          style={{
            backgroundColor: '#f4f4f4',
            height: '3rem',
            width: '20rem',
            borderRadius: '15px',
          }}
        />
      </form>
      <Empty height="2rem" />
      <Button
        style={{
          backgroundColor: '#f4f4f4',
          height: '3rem',
          width: '12rem',
          borderRadius: '15px',
        }}
      >
        로그인 하기
      </Button>
    </>
  );
}

export { Layout, LoginBox, Empty };
