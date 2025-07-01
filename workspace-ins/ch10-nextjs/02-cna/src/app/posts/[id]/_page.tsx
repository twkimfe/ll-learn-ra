import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
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

export default async function InfoPage({ params }: { params: { id: string } }) {
  const pageParams = await params;
  console.log('pageParams', pageParams);
  return (
    <h1>상세 조회 - { pageParams.id }번 게시물</h1>
  );
}