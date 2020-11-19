import React from "react";
import {Route} from "react-router-dom";

const SignupTemplate = (props) => (

    <div className={"container-sm container"}>
        <Route exact path={props.path} component={props.component}/>
    </div>

)

export default SignupTemplate;
