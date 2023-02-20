import logo from "./logo.svg";
import "./App.css";
import ExerciseBody from "./Components/exercises";
import BoxContainer from "./Components/boxcontainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">box</h1>
        {/* <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div> */}
        <BoxContainer numberOfBoxes={300
        } />

      </header>
    </div>
  );
}

export default App;
