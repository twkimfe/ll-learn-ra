'use client'

import { fetchPosts } from "@/data/functions/boardFetch";
import { Post } from "@/types/board";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}

export default function ListPage() {
  const [ data, setData ] = useState<Post[] | null>(null);

  async function fetchAsyncPosts() {
    const resData = await fetchPosts();
    setData(resData);
  }

  useEffect(()=> {
    fetchAsyncPosts();
  },[]); // mount 시 한 번만 호출

  console.log('API 서버로부터 받은 게시물 목록 수', data?.length);
  const posts = data?.map( post => <li key={ post._id }>
    <Link href={`/posts/${post._id}`}>
      { post._id } - { post.title }
    </Link>
  </li>)

  return (
    <>
      <h1>목록 조회</h1>
      <ul>
        { posts }
      </ul>
    </>
  );
}