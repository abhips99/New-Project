import AddCal from "./AddCal";
import MultiplyCal from "./MultiplyCal";
import SubstrackCal from "./SubstrackCal";
import DivideCal from "./DivideCal";
import { Link } from "react-router-dom"

const Reactcal =() =>{
    return(
        <div className="container">
            <div className="calculator">
                <AddCal />
                <MultiplyCal />
                <SubstrackCal />
                <DivideCal />
            </div>
            <Link className="backHome" to="/">Back to Home page</Link>
        </div>
    );
};

export default Reactcal;