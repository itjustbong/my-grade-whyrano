import axios from 'axios';

// [Todo] env 설정하기
const BASE_URL = 'https://my-grade-whyrno.ga';

const http = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
  timeout: 10000,
});

export default http;
