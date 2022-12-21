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
      <div
        style={{
          display: 'flex',
          minWidth: '15rem',
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
      </div>

      <Button>로그인하기</Button>
    </>
  );
}

export { Layout, LoginBox, Empty };
