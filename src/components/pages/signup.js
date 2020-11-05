import React from "react";
import SignupForm from "../forms/signup";

class SignupPage extends React.Component {
    render() {
        return (
            <div>
                <div className={"col-sm-12"}>
                    <h3 className={"text-left"} style={{paddingTop: "30px"}}>Opret bruger</h3>
                    <p className="lead text-left">
                        sportswatchapp.dk
                    </p>
                    <hr/>
                </div>
                <div className={"col-sm-12"}>
                    <SignupForm/>
                </div>
            </div>
        );
    }
}

export default SignupPage;
