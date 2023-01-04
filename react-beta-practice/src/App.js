import logo from "./logo.svg";
import "./App.css";
import ExerciseBody from "./Components/exercises";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Class exercises</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <ExerciseBody />
      </header>
    </div>
  );
}

export default App;
