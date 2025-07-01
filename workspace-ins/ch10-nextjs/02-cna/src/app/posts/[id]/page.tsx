import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  const data = {
    title: `${ id }번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 3.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: '1', title: '1번 제목' },
    { id: '2', slug: '2', sid: '3', title: '2번 제목' },
    { id: '3', slug: '2', sid: '3', title: '4번 제목' },
  ];

  return posts;
}

export default async function InfoPage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  console.log('pageParams', pageParams);
  return (
    <h1>상세 조회 - { pageParams.id }번 게시물</h1>
  );
}