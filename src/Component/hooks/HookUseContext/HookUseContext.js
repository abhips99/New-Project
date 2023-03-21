import React from "react";
import { Link } from "react-router-dom";
import CompoA from "./CompoA";
import { createContext } from "react";

export const users = createContext();

const HookUseContext = () =>{
    return (
        <div className="container">
            <users.Provider value={"Abhijeet"}>
                <CompoA />
            </users.Provider>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );
};

export default HookUseContext;