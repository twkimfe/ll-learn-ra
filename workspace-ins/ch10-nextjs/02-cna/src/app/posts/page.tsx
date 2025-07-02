import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}
export default async function ListPage() {

  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const dummyList = [];
  for(let i=1; i<=10; i++){
    dummyList.push({
      id: i,
      title: i + '번 게시물'
    });
  }

  const posts = dummyList.map(post => <li key={ post.id }><Link href={`/posts/${post.id}`}>{ post.title }</Link></li>);

  return (
    <>
      <h1>목록 조회</h1>
      <ul>
        { posts }
      </ul>
    </>
  );
}