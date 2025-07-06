// 'use server';
import { Post } from "@/types/board";

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 API 서버 구축
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      'Client-Id': 'openmarket',
    },
    // next: {
    //   tags: ['list','3']
    // },
    // cache: 'no-cache', // next 15 기본값
    // cache: 'force-cache', // next 14 기본값(과거 캐시로 렌더링)
  });
  const data = await res.json();
  console.log('boardFetch', data.item.length);
  return data.item
}