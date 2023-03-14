import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">
      <div className="addUser">
        <input type={"text"} placeholder="İsim" />
        <input type={"text"} placeholder="Soyisim" />
        <button>Ekle</button>
      </div>
      <div className="addUser">
        {userList.map((user) => {
          return <h1>{user.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
