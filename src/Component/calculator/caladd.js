import React from "react";
import "./styles.css"



const calAdd = () =>{

  const addHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const ouput = document.getElementById("text");
    const erroroutput = document.getElementById("error");
    const erroroutput2 = document.getElementById("error1");
    if (!isNaN (input1) && !isNaN (input2)){
      erroroutput.innerHTML = "Please enter vaild input";
      erroroutput2.innerHTML = "Please enter vaild input";
    }
    if(input1 === "" && input2 !=="" ){
      erroroutput.innerHTML = "Please enter vaild input";
      erroroutput2.innerHTML = "";
    }
    if(input2 === "" && input1 !== ""){
      erroroutput2.innerHTML = "Please enter vaild input";
      erroroutput.innerHTML = "";
    }
    if (!isNaN (input1) && !isNaN (input2) && input2 !== "" && input1 !== "") {
      let sum = parseInt(input1) + parseInt(input2);
      ouput.innerText = sum;
      erroroutput2.innerHTML = "";
      erroroutput.innerHTML = "";
    }
  };

    return (
        <div className="outer">
            <h2>Output: <span id="text"></span></h2>
            <form action="" className="formContainer">
              <div className="input-container">
                <label form="">Number One</label> <br />
                <input type="number" id="input1"  /> <br />
                <span id="error"></span>
              </div>
              <br />
              <div className="input-container">
                <label form="">Number Two</label> <br />
                <input type="number" id="input2" /> <br />
                <span id="error1"></span>
              </div>
               <br />
              <button className="btn-submit" id="btn-add" type="submit" onClick={addHandler}>Add</button>
            </form>
      </div>
    );
};

export default calAdd;