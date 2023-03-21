import React, {useReducer} from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HookUseReducer = () =>{
    let intialValve = 0;
    const reducer = (state = intialValve, action)=>{ 
        switch(action.type){
            case "Increment" : return state + action.payload;
            case "Decrement" : return state - action.payload;
            case "Reset" : return action.payload;
            default : return state;
         };
    };
    let user = {
        fullName : "",
        email: "",
        password: ""
    };

    const userReducer = (state = user, action) =>{
        switch(action.type){
            case "fullName" :
                return {...state , fullName: action.payload};
            case "email" :
                return {...state , email: action.payload};
            case "password" :
                return {...state , password: action.payload};
            default :
                return {...state};

        }
    }

    const [count, dispatch] =useReducer(reducer, intialValve);
    const [createUser, dispatchUser] =useReducer(userReducer, user);


    const HandleIncrement = () => {
        dispatch({type : "Increment", payload : 1});
    };
    const HandleIncrementBy = () => {
        dispatch({type : "Increment", payload : 5});
    };
    const HandleReset = () => {
        dispatch({type : "Reset", payload : 0});
    };
    const HandleDecrement = () => {
        dispatch({type : "Decrement", payload : 1});
    };
    return(
        <div className="container">
            <form className="formReducer" action="">
                <input type="text" name="fullName" onChange={(e)=>{
                    const {name, value} = e.target;
                    dispatchUser({type : name, payload : value});
                 }} value={createUser.fullName} />
                <input type="email" name="email" onChange={(e)=>{
                    const {name, value} = e.target;
                    dispatchUser({type : name, payload : value});
                 }} value={createUser.email}/>
                <input type="password" name="password" onChange={(e)=>{
                    const {name, value} = e.target;
                    dispatchUser({type : name, payload : value});
                 }} value={createUser.password}/>
            </form>
            <div className="counterOuter">
            <h2> Counter {count}</h2>
                <Button color="primary" onClick={HandleIncrement}>Increment</Button>
                <Button color="primary" onClick={HandleIncrementBy}>Increment By 5</Button>
                <Button color="danger" onClick={HandleReset}>Reset</Button>
                <Button color="secondary" onClick={HandleDecrement}>Decrement</Button>
            </div>
            <h4>{JSON.stringify(createUser)}</h4>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );
};

export default HookUseReducer;