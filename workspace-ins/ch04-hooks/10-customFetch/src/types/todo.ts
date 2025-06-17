// Todo 아이템의 타입 정의
export interface Todo {
  _id: number;      // Todo 아이템의 고유 식별자
  title: string;    // Todo 제목
  done: boolean;    // 완료 여부
  content: string;  // 내용
  createdAt: string;// 작성일
  updatedAt: string;// 수정일
}

// Todo 목록 응답 데이터 타입 정의
export interface TodoListRes {
  ok: 1;  // 성공 여부 (1: 성공)
  items: Todo[];  // Todo 아이템 배열
  pagination: {   // 페이지네이션 정보
    page: number;      // 현재 페이지
    limit: number;     // 페이지당 아이템 수
    total: number;     // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

// Todo 한건 응답 데이터 타입 정의
export interface TodoItemRes {
  ok: 1;
  item: Todo;
}

// 에러 응답 데이터 타입 정의
export interface ErrorRes {
  ok: 0;  // 성공 여부 (0: 실패)
  error: Error; // 에러 객체
}

// 응답 데이터 타입 정의
export type ResData = TodoListRes | TodoItemRes | ErrorRes;
