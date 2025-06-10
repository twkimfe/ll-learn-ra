import { useForm } from "react-hook-form";

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  fontWeight: 'bold',
};

interface User {
  name: string;
  email: string;
  cellphone: string;
}

// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 휴대폰 검증 정규식
const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit', // default: onSubmit, 최초 검증 시점
    reValidateMode: 'onBlur', // default: onChange, 재검증 시점
    criteriaMode: 'firstError', // default: firstError, errors 객체에서 에러가 발생한 요소의 첫 오류 하나만 포함하거나 전부 포함
    defaultValues: {
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  console.log(errors);

  // 검증 완료후에 실행할 코드
  const onSubmitHandler = (user: User) => {
    console.log('서버에 전송...', user);
  };

  return (
    <>
      <h1>16 회원가입 입력값 검증 (feat. react-hook-form)</h1>
      <form onSubmit={ handleSubmit(onSubmitHandler) }>
        <label htmlFor="name">*이름</label>
        <input id="name"
          { ...register('name', {
            required: '이름을 입력하세요.',
            minLength: {
              value: 2,
              message: '2글자 이상 입력하세요.'
            },
            pattern: {
              value: /^[^\d]*$/, // 숫자가 포함되지 않도록 설정
              message: '숫자는 입력할 수 없습니다.'
            }
          }) }
        /><br />
        <div style={errorStyle}>{ errors.name?.message }</div>

        <label htmlFor="email">*이메일</label>
        <input id="email"
          { ...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: emailExp,
              message: '이메일 양식에 맞지 않습니다.'
            }
          }) }
        /><br />
        <div style={errorStyle}>{ errors.email?.message }</div>

        <label htmlFor="cellphone">*휴대폰</label>
        <input id="cellphone"
          { ...register('cellphone', {
            required: '휴대폰 번호를 입력하세요.',
            pattern: {
              value: cellphoneExp,
              message: '휴대폰 형식에 맞지 않습니다.'
            }
          }) }
        /><br />
        <div style={errorStyle}>{ errors.cellphone?.message }</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: { watch('name') }<br />
        이메일: { watch('email') }<br />
        휴대폰: { watch('cellphone') }<br />
      </p>
    </>
  );
}

export default App
