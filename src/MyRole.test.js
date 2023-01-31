import { render, screen } from "@testing-library/react";
import MyRole from "./MyRole";

test("제목이 있다.", () => {
  render(<MyRole />);
  // getBy는 하나의 요소만 찾는다.
  // h1, h2 두개가 있을 경우 에러가 발생한다.
  // options으로 { level: 1 }을 넣었는데 이는 heading 요소중에서 level이 1인 h1을 의미한다.
  // level: 2라면 h2라는것을 알 수 있다.
  const titleElement = screen.getByRole("heading", { level: 1 });
  expect(titleElement).toBeInTheDocument();
});

test("input 요소가 있다.", () => {
  render(<MyRole />);
  // 에러가 발생하게 되는데 input-text와 textarea 모두 textbox로 Role이 똑같다는것을 알 수 있다.
  // 아래 내용은 label과 textbox들이 연결되어 있어서 확인이 가능한 내용들이다. id로 연결이 되어있지 않다면 에러가 발생한다.
  // name은 label에 해당하는 것을 적어주었다.
  // const inputElement = screen.getByRole("textbox", { name: "자기소개" });
  // options을 사용하지 않고 확인한다면 getByLabelText()를 이용해서 확인하는 방법도 있다.
  // const inputElement = screen.getByLabelText("자기소개");
  const inputElement = screen.getByLabelText("자기소개", {
    selector: "textarea", // label에 값이 같을 경우 selector를 이용해 연결될 요소를 적어주면 된다.
  });
  expect(inputElement).toBeInTheDocument();
});

test("input에 Tom이 있다.", () => {
  render(<MyRole />);
  // getByDisplayValue()를 이용해 input의 value에 Tom이 있는것을 확인 할 수 있다.
  const inputElement = screen.getByDisplayValue("Tom");
  expect(inputElement).toBeInTheDocument();
});

test("my-div가 있다.", () => {
  render(<MyRole />);
  // 찾기 어려운 요소가 있거나 text가 계속해서 변하는 경우 사용할 수 있지만
  // 단점은 data-testid라는 것을 코드에 적어야됨으로 최후의 수단으로 사용한다.
  const inputElement = screen.getByTestId("my-div");
  expect(inputElement).toBeInTheDocument();
});
