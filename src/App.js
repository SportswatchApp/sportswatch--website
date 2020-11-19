import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import DefaultTemplate from "./components/templates/default";
import SignupPage from "./components/pages/signup";
import ApiDocumentationPage from "./components/pages/api_documentation";
import SignupTemplate from "./components/templates/signup";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <SignupTemplate path={"/signup"} component={SignupPage}/>
                    <DefaultTemplate path={"/documentation"} component={ApiDocumentationPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
