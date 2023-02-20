export default function Box({ problem }) {
    return (
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
    );
}

function CalculateAnswer(problemNum) {
    switch (problemNum) {
        case 1:
            return PrintShrimp();
        case 2:
            return (
                FilterListRunner(1) +
                "" +
                FilterListRunner(2) +
                "" +
                FilterListRunner(3)
            );

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

/*****************************************Exercise 1***********************************/
function FilterListRunner(index) {
    let a1 = [1, 2, "a", "b"];
    let a2 = [1, "a", "b", 0, 15];
    let a3 = [1, 2, "aasf", "1", "123", 123];

    switch (index) {
        case 1:
            return FilterList(a1);
        case 2:
            return FilterList(a2);
        case 3:
            return FilterList(a3);
        default:
            return "No solution";
    }
}

function FilterList(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
    return "[" + arr.join(",") + "]";
}
  /*****************************************Exercise 2***********************************/
