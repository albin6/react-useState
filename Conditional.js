// here we can render the content according to the project
const Conditional = () => {
    let data = false; // assume that the data is passed as props
    if (!data) { // if no data 
        return (
            <div>
                <h1>No data found</h1>
            </div>
        )
    } // this is known as conditional rendering
    return (
        <div>
            <h1>Waiting for data</h1>
        </div>
    )
}

export default Conditional;