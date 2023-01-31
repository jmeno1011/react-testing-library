## 이 코드는

- 코딩앙마님의 유튭 강의로부터 공부하였습니다.
- 주석을 위에서부터 아래로 읽어가면서 해당 컴포넌트를 확인하면됨.

### 참고 링크

- jest-dom 사이트 [링크](https://github.com/testing-library/jest-dom)

#### getByText()

- 정규표현식이 아닌 text로 getByText에 넣었을때, 돔의 요소에 있는 텍스트 일부만 적으면 찾지 못한다.
- 전체를 넣거나 정규표현식을 이용하는 것을 추천한다.

```javascript
// 정규표현식을 이용하면 인식 부분만 넣어도 인식할 수 있다.
const textElement = screen.getByText(/로그인을/);
// 인식을 못 할 수 있음
const textElement = screen.getByText("로그인을");
```

#### getByRole()

- html 요소를 가지고 있는 default role을 찾는 쿼리이다.
- ex Role
  - h1 ~ h6 : heading
  - button : button
  - a : link
  - checkbox : checkbox
  - radio : radio
  - select : combobox
