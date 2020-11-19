import React from "react";
import {Route} from "react-router-dom";

const DefaultTemplate = (props) => (

    <div className={""}>
        <Route exact path={props.path} component={props.component}/>
    </div>

)

export default DefaultTemplate;
