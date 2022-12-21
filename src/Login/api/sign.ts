import http from './http';

type PostSignInType = { id: string; pw: string };

const ROUTE = '';

// [Todo] 명세 확인 후 요청
export const postSignIn = async ({ id, pw }: PostSignInType) => {
  await http
    .post(`${ROUTE}/sign`)
    .then(res => res)
    .catch(err => err);
};
