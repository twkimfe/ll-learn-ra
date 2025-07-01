export default async function SlugPage({ params }: { params: { id: string, slug: string[] } }) {
  const slugParams = await params;
  console.log(slugParams);
  switch (slugParams.slug?.[0]) {
    case 'likes':
      // 좋아요 목록 출력

    case 'favorites':
      // 즐겨찾기 목록 출력

  }
  return (
    <>
      <h1>{ slugParams.id }번 게시물의 { slugParams.slug?.[0] === 'likes' ? '좋아요 목록' : '즐겨찾기 목록' }</h1>
      { slugParams.slug?.[1] && <h2>{ slugParams.slug?.[1] } 상세 정보 출력</h2> }
    </>
  );
}