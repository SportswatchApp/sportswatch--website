import './App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import DefaultTemplate from "./components/templates/default";
import SignupPage from "./components/pages/signup";

function App() {
    return (
        <div className="App">
            <Router>
                <DefaultTemplate path={"/signup"} component={SignupPage}/>
            </Router>
        </div>
    );
}

export default App;
