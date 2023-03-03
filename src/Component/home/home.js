import React from "react";
import { Link } from "react-router-dom"
import { Button} from "reactstrap";
import  "./styles.css";

const Home = () =>{
    return(
        <div>
            <h2 className="heading">Learn React Js</h2>
            <div className="container">
                <h4>Some topics</h4>
                <div className="linkOuter">
                    <Link to="/javacalculator">Java Script Calculator</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/reactcalculator">React Calculator</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/counter">Counter</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/usehookstate">Use HookState</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/useeffect">Use Effect</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/usecontext">Use Contex</Link>
                </div>
                <div className="linkOuter">
                    <Link to="/usereducer">Use Reducer</Link>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <div className="buttonWrapper">
                        <Link to="/signup"> <Button>SignUp</Button></Link>
                        <Link to="/login"><Button>Login</Button></Link>
                    </div>  
                </div>
            </div>
        </div>
    );
};
export default Home;