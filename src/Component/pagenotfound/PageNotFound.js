import React from "react";
import { Link } from "react-router-dom";
import catImage from "./image/carError.png";
import ErrorImage from "./image/404.svg";
import "./styles.css";


const PageNotFound = () =>{
    return(
        <React.Fragment>
       
            <title>Page Not Found</title>
       
         <div className="notFound">
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 text-center"}>
                        <div className="notFoundGraphic">
                            <img
                                src={catImage} alt=""
                                className="animated swing"
                            />
                            <img src={ErrorImage} alt="" className="errorImage" />
                        </div>
                        <h4 className="oops">OOPS!</h4>
                        <p>
                            We couldn't find the page you were looking for. <br />
                            Don't panic or you'll wake up the cat. Press the button below to
                            go to homepage.
                        </p>
                        <Link className="backHome" to="/">Back to Home page</Link>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
};

export default PageNotFound;