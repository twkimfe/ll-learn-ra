import axios from "axios";
const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000 * 3,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // 설정 안 할 시, 크롬일 경우 "application/json, text/plain, */*" 순서로 제공
      Accept: 'application/json', // 응답 바디의 데이터 타입이 json으로 희망
    }
  });

  return instance;
}

export default useAxiosInstance;