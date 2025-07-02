'use server';

import { PostInfoRes } from '@/types/board';

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  // 많은 속성을 지닌 데이터를 일괄로 가져올 때
  // const jsonBody = Object.fromEntries(formData.entries());

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, content, type: 'qna' }),
    headers: {
      'Client-Id': 'openmarket',
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return data;
}