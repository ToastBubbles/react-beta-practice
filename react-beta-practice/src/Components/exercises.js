export default function ExerciseBody() {
  //   let answer = "shrimp";
  return <h1>{CalculateAnswer(1)}</h1>;
}

function CalculateAnswer(problemNum) {
  if (problemNum === 1) {
    return PrintShrimp();
  } else if (problemNum === 2) {
  }
}

function PrintShrimp() {
  return "Shrimpers";
}
