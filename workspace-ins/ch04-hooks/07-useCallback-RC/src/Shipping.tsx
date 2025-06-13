interface ShippingProps {
  fees: number;
  handlePayment: () => void;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Shipping({ fees, handlePayment }: ShippingProps) {
  console.log('Shipping 렌더링.');
  
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: { fees.toLocaleString() }원<br />
      </div>
      <br />
      <button type="button" onClick={ handlePayment }>결제</button>
    </>
  );
}

export default Shipping;