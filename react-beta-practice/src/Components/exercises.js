export default function ExerciseBody() {
  let problemNumber = 0;
  return (
    <div>
      <div>Problem Number: {problemNumber}</div>
      Answer:
      <div>{CalculateAnswer(problemNumber)}</div>
    </div>
  );
}

function CalculateAnswer(problemNum) {
  if (problemNum === 1) {
    return PrintShrimp();
  } else if (problemNum === 2) {
  } else {
    return "No solution";
  }
}

function PrintShrimp() {
  return "Shrimpers";
}
