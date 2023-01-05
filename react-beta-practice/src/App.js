import logo from "./logo.svg";
import "./App.css";
import ExerciseBody from "./Components/exercises";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Class exercises</h1>
        {/* <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div> */}
        <div className="Box-container">
          <div className="Segment s1"></div>
          <div className="Segment s2"></div>
          <div className="Segment s3"></div>
          <div className="Segment s4"></div>

          <div className="Segment s5"></div>
          <div className="Segment s6"></div>
          <div className="Segment s7"></div>
          <div className="Segment s8"></div>

          <div className="Segment s9"></div>
          <div className="Segment s10"></div>
          <div className="Segment s11"></div>
          <div className="Segment s12"></div>
        </div>
        <ExerciseBody problem={2} />
      </header>
    </div>
  );
}

export default App;
