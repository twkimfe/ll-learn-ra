import EditAddress from "@components/EditAddress";
import { produce } from "immer";
import { useState } from "react";

function App() {
  const [ user, setUser ] = useState({
    "_id": 4,
    "email": "u1@market.com",
    "name": "데이지",
    "phone": "01044445555",
    "address": "서울시 강남구 논현동 222",
    "type": "user",
    "createdAt": "2025.05.25 21:08:14",
    "updatedAt": "2025.06.04 09:38:14",
    "extra": {
      "birthday": "11-30",
      "addressBook": [
        {
          "id": 1,
          "name": "회사",
          "value": "서울시 강동구 천호동 123"
        },
        {
          "id": 2,
          "name": "집",
          "value": "서울시 강동구 성내동 234"
        }
      ]
    }
  });

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id, event.target.value);

    /*
    // 상태의 불변성이 지켜지지 않음
    const address = user.extra.addressBook.find(address => address.id === Number(event.target.id));
    address!.value = event.target.value;
    const newUser = { ...user };
    */

    /*
    // 상태의 불변성을 지키기 위해서 추가 작업 필요
    const newAddressBook = user.extra.addressBook.map(address => {
      if(address.id === Number(event.target.id)){ // 바꿔야 하는 주소
        return { ...address, value: event.target.value };
      }else{
        return address;
      }
    });

    const newUser = {
      ...user,
      extra: {
        ...user.extra,
        addressBook: newAddressBook
      }
    };
    */

    // immer 라이브러리 사용
    // user를 복사한 새로운 객체(draft)를 만들어서 콜백함수의 인자로 전달
    const newUser = produce(user, (draft) => {
      const address = draft.extra.addressBook.find(address => address.id === Number(event.target.id));
      address!.value = event.target.value;
    });

    // 회사 주소가 변경될 경우 기대하는 값
    console.log('user', user === newUser); // false
    console.log('user.extra', user.extra === newUser.extra); // false
    console.log('user.extra.addressBook', user.extra.addressBook === newUser.extra.addressBook); // false
    console.log('회사', user.extra.addressBook[0] === newUser.extra.addressBook[0]); // false
    console.log('회사 주소', user.extra.addressBook[0].value === newUser.extra.addressBook[0].value); // false
    console.log('집', user.extra.addressBook[1] === newUser.extra.addressBook[1]); // true
    console.log('집 주소', user.extra.addressBook[1].value === newUser.extra.addressBook[1].value); // true

    console.log('예전 회사 정보', user.extra.addressBook[0]); // 123
    console.log('바뀐 회사 정보', newUser.extra.addressBook[0]); // 1234

    setUser(newUser);
  };

  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <p>
        이메일: { user.email }<br/>
        이름: { user.name }<br/>
        전화번호: { user.phone }<br/>
      </p>
      <ul>
        { user.extra?.addressBook?.map(address => <li key={ address.id }>{ address.name }: { address.value }</li>) }
      </ul>

      <p>
        <EditAddress addressBook={ user.extra.addressBook } handleAddressChange={ handleAddressChange } />
      </p>
    </>
  );
}

export default App
