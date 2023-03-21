import React, { useRef, useState } from 'react'
import {CgProfile} from "react-icons/cg"

const HookUseRef = () => {
    const inputRef = useRef(null);
    const [file, setFile] = useState();

    const handleChange =(e)=>{
        setFile(URL.createObjectURL(e.target.files[0]));
    };
  return (
    <div>
        <input type="file" ref={inputRef} style={{display:"None"}} onChange={handleChange} />
        <CgProfile size={24} onClick={() => {inputRef.current.click();}} />
        <img src={file} alt="" />
    </div>
  )
}

export default HookUseRef