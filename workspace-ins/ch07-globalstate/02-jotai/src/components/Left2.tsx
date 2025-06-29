import Left3 from '@/components/Left3';
import { dualDoubleCountAtom as countAtom } from '@/jotai/derived';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const count = useAtomValue(countAtom);

  return (
    <div>
      <h2>Left2</h2>
      <span>{ count }</span>
      <Left3 />
    </div>
  );
}

export default Left2;