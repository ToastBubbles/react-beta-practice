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
          {/* <svg width="500" height="500">
            <defs>
              <linearGradient
                id="e"
                x1="40"
                y1="210"
                x2="460"
                y2="290"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="steelblue" offset="0" />
                <stop stop-color="red" offset="1" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="230"
              y2="0"
              stroke="url(#e)"
              stroke-width="30"
              className="line"
            />
            <line
              x1="230"
              y1="0"
              x2="400"
              y2="50"
              stroke="url(#e)"
              stroke-width="30"
              className="line"
            />
            <line
              x1="170"
              y1="100"
              x2="400"
              y2="50"
              stroke="url(#e)"
              stroke-width="30"
              className="line"
            />
            <line
              x1="170"
              y1="100"
              x2="0"
              y2="50"
              stroke="url(#e)"
              stroke-width="30"
              className="line"
            />
          </svg> */}
        </div>
        <ExerciseBody problem={2} />
      </header>
    </div>
  );
}

export default App;
