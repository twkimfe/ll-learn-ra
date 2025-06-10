interface ShippingProps {
  fees: number;
  handlePayment: () => void;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Shipping() {
  console.log('Shipping 렌더링.');
  
  return (
    <>
      
    </>
  );
}

export default Shipping;