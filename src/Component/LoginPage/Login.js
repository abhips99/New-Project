import { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Login = () =>{

    const [input, setInput] = useState();
    const [password, setPassword] = useState();

    const handleChangeText = (e) =>{
        setInput(e.target.value)
    };

    const handleChangePassword = (e) =>{
        setPassword(e.target.value);
    };

    const handleSubmit =() =>{
        console.log(input);
        console.log(password);
    };

    return (
        <div className="container loginWrapper">
            <h2>Login Page</h2>
            <Label>Enter your Email or Mobile No.</Label>
            <Input type="text" onChange={handleChangeText} />

            <Label>Enter your password</Label>
            <Input type="password" onChange={handleChangePassword} />

            <Button onClick={handleSubmit}>Login</Button>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );

}

export default Login;