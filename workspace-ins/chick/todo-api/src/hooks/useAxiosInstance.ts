import axios from 'axios';

export default function useAxiosInstance(){
  const instance = axios.create({
    baseURL: 'https://fesp-api.koyeb.app/todo',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      Accept: 'application/json' // 기대하는 응답 데이터 타입
    }
  });

  return instance;
}