import http from './http';

export type PostSignInType = { id: string; pw: string };

const ROUTE = '';

// [Todo] 명세 확인 후 요청
export const postSignIn = async ({ id, pw }: PostSignInType) =>
  await http.post(`${ROUTE}/sign`, { id, pw });
