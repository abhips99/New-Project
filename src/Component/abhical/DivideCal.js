import { useState } from "react";
import { Button, Input } from "reactstrap";


const DivideCal = () =>{

    const [inputOne, setInputOne] = useState("");
    const [inputSec, setInputSec] = useState("");
    const [isError, setIsError] = useState(false);
    const [output, setOutput] = useState(true);

    const handleChangeOne =(e) =>{
        setInputOne(e.target.value);
    }

    const handleChangeSec = (e) =>{
        setInputSec(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputOne === "" || inputSec === "") {
            setOutput("");
        } else {
            const Data = parseInt(inputOne) / parseInt(inputSec);
            setOutput(Data.toFixed(2));
        }   
        setIsError(true)

    }

    return (
        <div className="wrapper">
            <h2>Output: <span className="output">{output}</span></h2>
            <div className="inputFiled">
                <Input type="number" onChange={handleChangeOne} />
                {isError && inputOne === "" ? <span>Please Enter Vaild Input</span> : "" }
            </div>
            <div className="inputFiled">
                <Input type="number" onChange={handleChangeSec}/>
                {isError && inputSec === "" ? <span>Please Enter Vaild Input</span> : ""}
            </div>
            <Button onClick={handleSubmit}>Divide Number</Button>
        </div>
    );

} 

export default DivideCal;