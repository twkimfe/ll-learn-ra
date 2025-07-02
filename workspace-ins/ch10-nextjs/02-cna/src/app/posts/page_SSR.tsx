import { fetchPosts } from "@/data/functions/boardFetch";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}

export default async function ListPage() {
  const data = await fetchPosts();
  console.log('API 서버로부터 받은 게시물 목록 수', data.length);
  const posts = data.map(post => <li key={ post._id }><Link href={`/posts/${post._id}`}>{ post._id } - { post.title }</Link></li>);
  return (
    <>
      <h1>목록 조회</h1>
      <ul>
        { posts }
      </ul>
    </>
  );
}