import React from "react";
import {Route} from "react-router-dom";

const DefaultTemplate = (props) => (

    <div className={"container-sm container"}>
        <Route exact path={props.path} component={props.component}/>
    </div>

)

export default DefaultTemplate;
