import axios from "axios";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000*5,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // 설정하지 않으면 크롬일 경우 "application/json, text/plain, */*"
      Accept: 'application/json', // 응답 바디의 데이터 타입이 json이면 좋겠음
    }
  });

  return instance;
}

export default useAxiosInstance;