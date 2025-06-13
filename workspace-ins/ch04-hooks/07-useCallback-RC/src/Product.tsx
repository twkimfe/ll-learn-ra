interface ProductProps {
  name: string;
  price: number;
  mainImage: string;
  content: string;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Product({ name, price, mainImage, content }: ProductProps) {
  "use no memo"
  console.log('Product 렌더링.');
  
  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: { name }</p>
      <p>가격: { price.toLocaleString() }원</p>
      <p>상품 설명</p>
      <div>
        <img src={ `https://fesp-api.koyeb.app/nike${mainImage}` } width="600" />
        <p>{ content }</p>
      </div>
    </>
  );
}

export default Product;