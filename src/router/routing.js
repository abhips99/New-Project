import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Reactcal from "../Component/abhical/reactcal";
import CalAdd from "../Component/calculator/caladd";
import Counter from "../Component/Counter/counter";
import Home from "../Component/home/home";
import HookUseCallback from "../Component/hooks/HookUseCallback/HookUseCallback";
import HookUseContext from "../Component/hooks/HookUseContext/HookUseContext";
import HookUseEffect from "../Component/hooks/HookUseEffect";
import HookUseReducer from "../Component/hooks/HookUseReducer";
import HookUseState from "../Component/hooks/HookUseState";
import Login from "../Component/LoginPage/Login";
import PageNotFound from "../Component/pagenotfound/PageNotFound";
import ComponentA from "../Component/props/ComponentA";
import SignUp from "../Component/SignupPage/SignUp";

const Routing = () =>{

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/javacalculator" element={<CalAdd />} />
                <Route path="/reactcalculator" element={<Reactcal />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/props" element={<ComponentA />} />
                <Route path="/usehookstate" element={<HookUseState />} />
                <Route path="/useeffect" element={<HookUseEffect />} /> 
                <Route path="/usecontext" element={<HookUseContext />} />
                <Route path="/usereducer" element={<HookUseReducer />} />
                <Route path="/usecallback" element={<HookUseCallback />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
        </>
    );

};

export default Routing;