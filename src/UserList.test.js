import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시 후 제목이 나타납니다.", async () => {
    render(<UserList users={users} />);
    // getByRole로 하게 되면 heading(h1)에 해당하는 요소가 0.5초 뒤에 생성이 되기 때문에 에러가 발생한다.
    // const titleElement = screen.getByRole("heading",{
    //     name:"사용자 목록"
    // })
    // findByRole()은 promise를 반환하기 때문에 async await이 필요하다.
    // screen.debug();
    const titleElement = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      { timeout: 2000 }
      // default timeout이 1초 이기때문에 1초가 지나도 안나오면 에러가 발생하여
      // 2초를 넣어주면 에러가 발생하지 않음을 확인할 수 있다.
    );
    // screen.debug()를 이용하면 렌더된 컴포넌트의 모습을 terminal에서 확인할 수 있어서
    // 첫번째 debug()에서는 h1요소가 안보이지만 두번째 debug()에서는 보이는 것을 확인할 수 있다.
    // screen.debug();
    expect(titleElement).toBeInTheDocument();
  });

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    // ul이 있는지 우선 체크
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={users} />);
    const liElement = screen.getAllByRole("listitem");
    // toHaveLength(2) 2개가 있을 것이다라고 하면 아래와 같이 에러가 나고 몇개가 들어있는지 알려준다.
    // expect(liElement).toHaveLength(2);
    // Expected length: 2
    // Received length: 3
    // Received array:  [<li>Tom</li>, <li>Jane</li>, <li>Mike</li>]
    expect(liElement).toHaveLength(3); // 렌더된 li의 갯수와 같게 할 경우 테스트를 통과하게 된다.
    expect(liElement).toHaveLength(users.length); // 전달되는 갯수 만큼 넣기
  });

  test("li는 존재합니까??", () => {
    render(<UserList users={[]} />);
    // const liElement = screen.getAllByRole("listitem")
    // expect(liElement).toHaveLength(0); // 요소가 없어서 에러가 발생한다.

    // https://testing-library.com/docs/queries/about#types-of-queries 의 summary table 확인
    // 없는 요소를 확인 할 때
    // getBy나 getAllBy는 일치하는 내용이 없으면 에러를 반환한다.
    // queryBy나 queryAllBy는 없을때 에러가 발생하지 않고 null이나 빈배열을 반환한다.
    // const liElement = screen.queryByRole("listitem");
    const liElement = screen.queryAllByRole("listitem");
    expect(liElement).toHaveLength(0);
  });
});
