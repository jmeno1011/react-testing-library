import { useState } from "react";

export default function HoverButton() {
  const [hoverState, setHoverState] = useState(false);
  const onMouseEnterHandle = () => {
    setHoverState(true);
  };
  const onMouseLeaveHandle = () => {
    setHoverState(false);
  };

  return (
    <button
      style={{ backgroundColor: !hoverState ? "white" : "red" }}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {!hoverState ? "기본 상태" : "호버 상태"}
    </button>
  );
}
