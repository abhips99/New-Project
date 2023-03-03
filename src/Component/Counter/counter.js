import { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
 
const Counter =() =>{

    let current = 0;

    const [count, setCount] = useState(0);
    return(
        <div className="container">
            <div className="counterOuter">
                <h2>Counter {count} </h2>
                <Button color="danger" onClick={()=>{
                setCount(current);
                }} >Current</Button> 
                <Button color="primary" onClick={()=>{
                setCount(count + 1);
                }} >Increment</Button> 
                <Button color="secondary" onClick={()=>{
                setCount(count - 1);
                }} >Decrement</Button>
            </div>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );
};
export default Counter;