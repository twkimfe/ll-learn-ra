import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log('GET 라우트 핸들러', id);
  // DB 연동해서 상세 정보 조회 작업 직접 조회(풀스택)
  // 준비된 API 서버 구축
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      // 'Content-Type': 'application/json',
      'Client-Id': 'openmarket',
    },
  });
  
  const data = await res.json();
  // const data = { id, title: 'fake title' }
  return NextResponse.json(data);
}

export function POST() {
  return NextResponse.json('router handler의 POST 응답');
}

export function DELETE() {
  return NextResponse.json('router handler의 DELETE 응답');
}