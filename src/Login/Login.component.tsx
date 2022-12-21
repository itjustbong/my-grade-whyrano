import React from 'react';
import { Empty, Input, Button, Form } from './Login.styled';
import { Typography } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

type Props = (id: string, pw: string) => void;

/* [Todo] 다시 리펙토링 */
export function LoginBox({ onLogin }: { onLogin: Props }): JSX.Element {
  const signRef = React.useRef({ id: '', pw: '' });
  const signErrRef = React.useRef({ id: '', pw: '' });

  const onChange = (e: any) => {
    signRef.current = { ...signRef.current, [e.target.id]: e.target.value };
  };
  const onSubmit = async () => {
    // [Todo] Proxy 넣어봤음
    const signProxy = new Proxy(signRef.current, {
      get: obj => {
        if (obj.id.length !== 8) {
          signErrRef.current = {
            ...signErrRef.current,
            id: '아이디는 8글자여야 합니다.',
          };
          return null;
        } else if (Number.isNaN(Number(obj.id))) {
          signErrRef.current = {
            ...signErrRef.current,
            id: '아이디는 숫자여야 합니다.',
          };
          return null;
        }
        if (obj.pw.length === 0) {
          signErrRef.current = {
            ...signErrRef.current,
            pw: '비밀번호를 입력해주세요.',
          };
          return null;
        }
      },
    });

    const notify = (type: 'id' | 'pw') =>
      toast(signErrRef.current[type], {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

    if (signProxy.id === null) notify('id');
    else if (signProxy.pw === null) notify('pw');
    else await onLogin(signProxy.id, signProxy.pw);
  };

  return (
    <>
      <Form onSubmit={() => console.log('sss')}>
        <InputID onChange={onChange} />
        <Empty height="1rem" />
        <InputPW onChange={onChange} />
        <Empty height="2rem" />
        <Button onClick={onSubmit}>로그인 하기</Button>
      </Form>
    </>
  );
}

export const InputID = ({ ...props }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography.Text style={{ fontSize: '2rem' }}>ID</Typography.Text>
    <Input id="id" {...props} />
  </div>
);

export const InputPW = ({ ...props }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography.Text style={{ fontSize: '2rem' }}>PW</Typography.Text>
    <Input id="pw" type="password" {...props} />
  </div>
);
