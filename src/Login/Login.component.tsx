import { Empty, Input, Button, Form } from './Login.styled';
import { Typography } from 'antd';

/* [Todo] 다시 리펙토링 */
export function LoginBox(): JSX.Element {
  return (
    <>
      <Form>
        <InputID />
        <Empty height="1rem" />
        <InputPW />
        <Empty height="2rem" />
        <Button>로그인 하기</Button>
      </Form>
    </>
  );
}

export const InputPW = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography.Text style={{ fontSize: '2rem' }}>PW</Typography.Text>
    <Input type="password" />
  </div>
);

export const InputID = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography.Text style={{ fontSize: '2rem' }}>ID</Typography.Text>
    <Input />
  </div>
);
