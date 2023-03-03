import { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import "./styles.css";
import { Link } from "react-router-dom"

const SignUp =() =>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    const handleName = (e) =>{
        setName(e.target.value);
    };

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };

    const handleMobile = (e) =>{
        setMobile(e.target.value);
    };

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };

    const handleRePassword = (e) =>{
        setRePassword(e.target.value);
    };

    const handleSubmit =() =>{
        console.log(name);
        console.log(email);
        console.log(mobile);
        console.log(password);
        console.log(rePassword);
    };



    return(
        <div className="container signUpWrapper">
            <h2>Sign Up Page</h2>
            <Label>Name</Label>
            <Input type="text" onChange={handleName}/>
            <Label>Email</Label>
            <Input type="text" onChange={handleEmail} />
            <Label>Mobile Number</Label>
            <Input type="text" onChange={handleMobile}/>
            <Label>Password(6 or more characters)</Label>
            <Input type="text" onChange={handlePassword} />
            <Label>ReEnter Password</Label>
            <Input type="text" onChange={handleRePassword} />
            <Button onClick={handleSubmit} >Sign Up</Button>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );
}
export default SignUp;