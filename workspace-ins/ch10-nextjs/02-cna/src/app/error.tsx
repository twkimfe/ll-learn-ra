'use client';

import Link from "next/link";

export default function RootError({ error }: { error: Error }) {
  console.error('error.tsx에서 처리', error);

  return (
    <>
      <div>일시적인 에러가 발생했습니다.</div>
      <Link href="/">홈으로</Link>
    </>
  );
}