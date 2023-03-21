import React from "react";
import { Link } from "react-router-dom"
import { Button} from "reactstrap";
import  "./styles.css";

const Home = () =>{
    return(
        <div className="MainOuter">
            <h2 className="heading">Learn React Js</h2>
            <div className="container homeOuter">
                <h2>Some topics</h2>
                <div className="topicOuter">
                    <Link className="linkOuter" to="/javacalculator">Java Script Calculator</Link>
                    <Link className="linkOuter" to="/reactcalculator">React Calculator</Link>
                    <Link className="linkOuter" to="/counter">Counter</Link>
                    <Link className="linkOuter" to="/props">Props</Link>
                    <Link className="linkOuter" to="/usehookstate">Hook Use State</Link>
                    <Link className="linkOuter" to="/useeffect">Hook Use Effect</Link>
                    <Link className="linkOuter" to="/usecontext">Hook Use Context</Link>
                    <Link className="linkOuter" to="/usereducer">Hook Use Reducer</Link>
                    <Link className="linkOuter" to="/usecallback">Hook Use CallBack</Link>
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