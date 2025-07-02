'use server'; // 서버 액션

// 게시글 등록
export async function createPost(formData: FormData){
  const title = formData.get('title');
  const content = formData.get('content');

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    method: 'POST',
    body: JSON.stringify({title, content}),
    headers: {
      'Client-Id': 'openmarket'
    }
  });
  const data = await res.json();
  return data;
}