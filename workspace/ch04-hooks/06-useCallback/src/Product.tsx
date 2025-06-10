interface ProductProps {
  name: string;
  price: number;
  mainImage: string;
  content: string;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Product() {
  console.log('Product 렌더링.');
  
  return (
    <>
      
    </>
  );
}

export default Product;