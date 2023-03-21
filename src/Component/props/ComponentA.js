import ComponentB from "./ComponentB";
import { Link } from "react-router-dom";

function ComponentA() {
    return (
        <>
        <h2>ComponentA</h2>
        <ComponentB name = "Abhijeet" arr = {["Delhi", "Gurgaon", "Noida" ]} />
        <Link className="backHome" to="/">Back to Home page</Link>
        </>
    );
}

export default ComponentA;