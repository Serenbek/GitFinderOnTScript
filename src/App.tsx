import "./App.css";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Search hasError={false} onSubmit={() => alert("Hello")} />
    </div>
  );
}

export default App;
