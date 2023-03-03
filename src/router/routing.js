import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Reactcal from "../Component/abhical/reactcal";
import CalAdd from "../Component/calculator/caladd";
import Counter from "../Component/Counter/counter";
import Home from "../Component/home/home";
import HookUseState from "../Component/hooks/HookUseState";
import Login from "../Component/LoginPage/Login";
import PageNotFound from "../Component/pagenotfound/PageNotFound";
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
            <Route path="/usehookstate" element={<HookUseState />} />
            <Route path="/useeffect" element={<h2>Use Effect</h2>} />
            <Route path="/usecontext" element={<h2>Use Context</h2>} />
            <Route path="/usereducer" element={<h2>Use Reducer</h2>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
        </>
    );

};

export default Routing;