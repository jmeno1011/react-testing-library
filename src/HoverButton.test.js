import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HoverButton from "./HoverButton";

test("호버가 안 된 상태.", () => {
  render(<HoverButton />);
  const btnElement = screen.getByRole("button");
  const btnTextElement = screen.getByText("기본 상태");
  expect(btnElement).toBeInTheDocument();
  expect(btnTextElement).toBeInTheDocument();
  expect(btnElement).toHaveStyle({
    backgroundColor: "white",
  });
});

test("호버 된 상태.", () => {
  render(<HoverButton />);
  const btnElement = screen.getByRole("button");
  // hover된 상태의 텍스트를 확인하려면 userEvent로 hover상태를 만든 뒤
  // getByText로 버튼안에 텍스트를 확인해야한다.
  userEvent.hover(btnElement);
  const btnTextElement = screen.getByText("호버 상태");
  expect(btnElement).toBeInTheDocument();
  expect(btnTextElement).toBeInTheDocument();
  expect(btnElement).toHaveStyle({
    backgroundColor: "red",
  });
});
