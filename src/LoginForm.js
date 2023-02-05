import { useState } from "react";

// 원래는 onSubmit을 컴포넌트 안에 있는 구조가 되어있어야 되지만
// props으로 onSubmit = () => {}를 넣어둔 것은 테스트할때는 있어야하기 떄문에 존재하게 되었다.
export default function LoginForm({ onSubmit = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandle = (event) => {
    event.preventDefault();
    console.log("로그인 성공");
    onSubmit();
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="test"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pw">비밀번호</label>
      <input
        id="pw"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!email || !password}>로그인</button>
    </form>
  );
}
