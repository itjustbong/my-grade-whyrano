import axios from 'axios';

// [Todo] env 설정하기
const BASE_URL = 'http://115.85.181.157:8000';

const http = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
  timeout: 50000,
});

export default http;
