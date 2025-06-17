import useCounter from "@/hooks/useCounter";
import Button from "@components/Button";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children='1' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);
  const { count, stepRef, down, up, reset } = useCounter(initCount);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        defaultValue={ stepRef.current }
        onChange={ (event) => stepRef.current = Number(event.target.value) }
      />
      <Button color="red" onClick={ down }>-_-</Button>
      <Button type="reset" onClick={ reset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ up }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;