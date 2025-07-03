'use server'; // 서버 액션

import { PostInfoRes } from "@/types/board";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData){
  const title = formData.get('title');
  const content = formData.get('content');
  const body = {title, content, type: 'qna'};
  console.log(body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST',
    body: JSON.stringify({title, content, type: 'qna'}),
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': 'openmarket'
    }
  });
  const data = await res.json();
  if(data.ok){
    // revalidatePath('/posts');
    // revalidatePath('/posts/8');
    revalidateTag('list');

    redirect('/posts');
  }
  return data;
}
