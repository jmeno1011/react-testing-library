import logo from "./logo.svg";
import "./App.css";
import MyPage from "./MyPage";
import JoinButton from "./JoinButton";
import MyRole from "./MyRole";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header border-white">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="p-4 border-white">
        <MyPage />
        <MyPage user="kim" />
        <MyPage user={{ name: "kim" }} />
      </div>
      <div className="p-4 border-white">
        <JoinButton age={10} />
        <JoinButton age={30} />
      </div>
      <div className="p-4 border-white">
        <MyRole />
      </div>
      <div className="p-4 border-white">
        <UserList users={["Tom", "Jane", "Mike"]} />
      </div>
    </div>
  );
}

export default App;
