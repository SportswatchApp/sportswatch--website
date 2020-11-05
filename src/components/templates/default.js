import React from "react";
import {Route} from "react-router-dom";

const DefaultTemplate = (props) => (

    <Route exact path={props.path}>
        <div className={"container-sm container"}>
            <Route exact path={props.path} component={props.component}/>
        </div>
    </Route>

)

export default DefaultTemplate;
