import logo from "./logo.svg";
import "./App.css";
import ExerciseBody from "./Components/exercises";
import Box from "./Components/box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Class exercises</h1>
        {/* <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div> */}
       <Box />
        <ExerciseBody problem={2} />
      </header>
    </div>
  );
}

export default App;
