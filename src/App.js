import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import DefaultTemplate from "./components/templates/default";
import SignupPage from "./components/pages/signup";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <DefaultTemplate path={"/signup"} component={SignupPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
