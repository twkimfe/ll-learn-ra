'use server'; // 서버 함수

import { Post } from "@/types/board";

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      'Client-Id': 'openmarket'
    }
  });
  const data = await res.json();
  console.log('boardFetch', data.item.length);
  return data.item;
}