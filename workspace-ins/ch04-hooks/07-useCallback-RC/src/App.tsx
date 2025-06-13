import { useState } from "react";
import Shipping from "./Shipping";
import Product from "./Product";
import Price from "./Price";

function App() {
  "use no memo"
  
  const data = {
    _id: 2,
    price: 125000,
    shippingFees: 3000,
    name: '나이키 잼',
    quantity: 35, // 총 판매 수량
    buyQuantity: 10, // 구매된 수량
    mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
    content: '나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.'
  };

  const [ quantity, setQuantity ] = useState(1);

  const productPrice = data.price * quantity;
  const shippingFees = data.shippingFees * Math.ceil(quantity / 5)

  // 수량이 변경되면 배송비 다시 계산
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  // 결제 버튼 클릭 시 결제 확인 메시지 표시
  const handlePayment = () => {
    alert(`배송비 ${shippingFees}원이 추가됩니다. 상품을 결제하시겠습니까?`);
  };

  return (
    <>
      <h1>07 React Compiler를 사용한 메모이제이션</h1>

      <Product name={ data.name } price={ data.price } mainImage={ data.mainImage } content={ data.content } />

      <Price 
        price={ data.price } 
        maxQuantity={ data.quantity - data.buyQuantity } 
        shippingFees={ data.shippingFees } 
        productPrice={ productPrice } 
        quantity={ quantity } 
        handleQuantityChange={ handleQuantityChange }
      />

      <Shipping fees={ shippingFees } handlePayment={ handlePayment } />
    </>
  );
}

export default App
