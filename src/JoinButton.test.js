import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색이다.", () => {
  render(<JoinButton age={10} />);
  const btnElement = screen.getByRole("button");
  const textElement = screen.getByRole("heading");
  expect(btnElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(btnElement).toBeDisabled(); // 성인이 아니니 버튼이 비활성됨
  // toHaveStyle()을 통해서 스타일 확인
  expect(textElement).toHaveStyle({
    color: "red",
  });
});

test("성인이면 버튼을 클릭할 수 았다. 안내문구는 흰색이다.", () => {
  render(<JoinButton age={30} />);
  const btnElement = screen.getByRole("button");
  const textElement = screen.getByRole("heading");
  expect(btnElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(btnElement).toBeEnabled(); // 성인이므로 버튼이 활성됨
  expect(textElement).toHaveStyle({
    color: "white",
  });
});
