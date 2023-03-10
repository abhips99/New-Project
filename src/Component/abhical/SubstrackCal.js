import { useState } from "react";
import { Button, Input } from "reactstrap";


const SubstrackCal = () =>{

    const [inputOne, setInputOne] = useState("");
    const [inputSec, setInputSec] = useState("");
    const [output, setOutput] = useState(true);
    const [isError, setIsError] = useState(false);


    const handleChangeOne = (e) =>{
        setInputOne(e.target.value);
    };
    const handleChangeSec = (e) =>{
        setInputSec(e.target.value);
    };

    const handleSubmit =(e) =>{

        e.preventDefault();

        if (inputOne === "" || inputSec === "") {
            setOutput("");
        } else {
            const Data = parseInt(inputOne) - parseInt(inputSec);
            setOutput(Data);
        }
        setIsError(true);
    };

    return (
        <div className="wrapper">
            <h2>Output: <span className="output">{output}</span></h2>
            <div className="inputFiled">
                <Input type="number" onChange={handleChangeOne}/>
                {isError && inputOne === "" ? <span>Please Enter Vaild Input</span> : ""}
            </div>
            <div className="inputFiled">
                <Input type="number" onChange={handleChangeSec} />
                {isError && inputSec === "" ? <span>Please Enter Vaild Input</span> : ""}
            </div>
            <Button onClick={handleSubmit}>SubsTrack number</Button>
        </div>
    );

}

export default SubstrackCal;