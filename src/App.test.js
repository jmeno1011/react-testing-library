import { render, screen } from "@testing-library/react";
import App from "./App";

// test는 3개의 인자를 받는다
// (name: string, fn?: jest.ProvidesCallback | undefined, timeout?: number | undefined)
// 1. 테스트명 'renders learn react link'
// 2. 함수(테스트 할 때 실행되는 기능을 적어줍니다.)
// () => {
//   render(<App />);
//   // 화면에 learn react라는 텍스트가 있는걸 확인하는 과정이다.
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// }
// 3. 타임아웃 (지금 아래에는 없지만 default는 5초이다.)
test("renders learn react link", () => {
  // render는 특정 컴포넌트를 받아서 virtual Dom을 생성해준다.
  render(<App />);
  // screen 객체의 특정 쿼리 메소드를 이용해서 요소에 접근할 수 있다.
  // 화면에 learn react라는 텍스트를 대소문자 구분없이 찾으려고 한 정규식으로 작성되어 있다.
  // /learn react/i
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미지가 잘 나온다.", () => {
  render(<App />);
  const logoElemnet = screen.getByAltText("logo");
  // 로고가 document에 있는지 확인 toBeInTheDocument
  expect(logoElemnet).toBeInTheDocument();
});
