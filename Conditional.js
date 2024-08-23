import { useState } from "react";
// here we can render the content according to the project
const Conditional = () => {
    let data = false; // assume that the data is passed as props
    if (!data) { // if no data 
        return (
            <div>
                <h1>No data found</h1>
            </div>
        )
    }
    // any statement after the above if will not get executed if no data is passed
    const [status, setStatus] = useState(0)
    return (
        <div>
            <h1>data recieved</h1>
        </div>
    )
    // instead of having two return we do it in one
    return (<section>{
        (!data) ? (
            <div>
                <h1>No data found</h1>
            </div>
        ) : (<div>
            <h1>data recieved</h1>
        </div>)
    }</section>)
    // this is known as conditional rendering
}

export default Conditional;