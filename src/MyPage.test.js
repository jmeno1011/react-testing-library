import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

// 아무것도 전달되지 않은 경우
test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const textElement = screen.getByText(/로그인을 해주세요/);
  // button에 getByRole로 접근을 해주었다.
  const btnElement = screen.getByRole("button");
  expect(textElement).toBeInTheDocument();
  expect(btnElement).toBeInTheDocument();
  // button이 로그인이라는 텍스트를 가지고 있는지 toHaveTextContent로 확인
  expect(btnElement).toHaveTextContent("로그인");
});

// user 프로퍼티가 정상적으로 전달된 경우
test("유저가 있으면 환영문구를 보여준다.", () => {
  render(<MyPage user={{ name: "kim" }} />);
  const textElement = screen.getByText(/kim님 환영합니다./);
  expect(textElement).toBeInTheDocument();
});

// 프로퍼티가 전달되었지만 정상적이지 않은경우
test("유저가 name이 없으면 로그인 문구화 버튼을 보여준다.", () => {
  render(<MyPage user="kim" />);
  const textElement = screen.getByText(/로그인을 해주세요/);
  const btnElement = screen.getByRole("button");
  expect(textElement).toBeInTheDocument();
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toHaveTextContent("로그인");
});
