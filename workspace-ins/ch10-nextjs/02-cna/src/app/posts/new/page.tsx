import { Metadata } from "next";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.'
}

export default function NewPage() {
  return (
    <>
      <h1>게시글 등록</h1>
      <form>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <button>등록</button>
      </form>
    </>
  );
}