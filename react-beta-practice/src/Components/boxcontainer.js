import Box from "./box";



export default function BoxContainer({ numberOfBoxes }) {
    let i = 0;
    let innerHTML = [];
    while (i < numberOfBoxes) {
        innerHTML.push(<Box />);
        i++;
    }
    return (
        <div className='boxmamma'>
            {innerHTML}
        </div>

    );
}