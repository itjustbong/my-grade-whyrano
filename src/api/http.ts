import axios from 'axios';

// [Todo] env 설정하기
const BASE_URL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});

export default http;
