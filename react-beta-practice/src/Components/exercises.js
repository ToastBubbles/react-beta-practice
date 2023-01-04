export default function ExerciseBody() {
  let problemNumber = 1;
  return (
    <div>
      <div>Problem Number: {problemNumber}</div>
      Answer:
      <div>{CalculateAnswer(problemNumber)}</div>
    </div>
  );
}

function CalculateAnswer(problemNum) {
  switch (problemNum) {
    case 1:
      return PrintShrimp();
    case 2:
      return PrintShrimp();
    case 3:
      return PrintShrimp();
    case 4:
      return PrintShrimp();
    case 5:
      return PrintShrimp();
    default:
      return "No solution";
  }
}

function PrintShrimp() {
  return "Shrimpers";
}
