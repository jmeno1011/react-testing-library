import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("버튼 비활성 / 활성 확인", () => {
  render(<LoginForm />);

  const emailInput = screen.getByLabelText("이메일");
  const pwInput = screen.getByLabelText("비밀번호");
  const button = screen.getByRole("button");

  // button disable 확인
  expect(button).toBeDisabled();

  // 값 넣어보기
  userEvent.type(emailInput, "test");
  userEvent.type(pwInput, "test");
  expect(button).toBeEnabled();
});

test("로그인 버튼 활성된 상태에서 onSubmit 함수가 호출됬는지 검증", () => {
  // jset.fn()이용한 mocking을 이용하여 어떻게 사용되는지 명시적으로 테스트할 수 있다.
  // 컴포넌트 설계시 이벤트가 컴포넌트에 캡슐화 되어있어야되지만
  // 테스트 케이스 작성시에는 어떻게 사용되는 알기 위해 구조를 약간 바꿔줍니다.
  const onSubmitHandle = jest.fn();
  render(<LoginForm onSubmit={onSubmitHandle} />);

  const emailInput = screen.getByLabelText("이메일");
  const pwInput = screen.getByLabelText("비밀번호");
  const button = screen.getByRole("button");

  // 값이 들어가 있는 상태
  userEvent.type(emailInput, "test");
  userEvent.type(pwInput, "test");
  expect(button).toBeEnabled();

  userEvent.click(button);
  // 이벤트를 콜 했는지 확인
  expect(onSubmitHandle).toHaveBeenCalled();
  // 이벤트를 1번 불렀는지 확인
  expect(onSubmitHandle).toHaveBeenCalledTimes(1);
});
