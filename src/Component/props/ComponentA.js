import ComponentB from "./ComponentB";

function ComponentA() {
    return (
        <>
        <h2>ComponentA</h2>
        <ComponentB name = "Abhijeet" arr = {["Delhi", "Gurgaon", "Noida" ]} />
        </>
    );
}

export default ComponentA;