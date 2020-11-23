import React from "react";
import FormError from "./formError";
import {withRouter} from 'react-router';
import api from "../../api";
import FormSuccess from "./formSuccess";

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                conf_password: "",
            },
            errors: '',
            success: '',
        }
        // preserve the initial state in a new object
        this.baseState = this.state
    }

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onEmailChange = e => {
        this.setState({
            data: {...this.state.data, 'email': e.target.value.toLowerCase()}
        });
    }

    handleSignup = e => {
        e.preventDefault();
        var data = JSON.stringify(this.state.data);
        console.log(data);
        console.log(api.user);
        api.user.create(data).then(user => {
            this.setState({success: 'Bruger oprettet'});
            this.setState({errors: ''});
        }).catch((error) => {
            console.log(error.response);
            if(error.response) {
                this.setState({errors: error.response.data.detail});
                this.setState({success: ''});
            }
        })
    };

    mapError = error => {
        return error.response.status + ' ' + error.response.data.error;
    }

    handleCloseWindow = e => {
        window.close();
    }

    render() {
        const {data, errors, success} = this.state;
        return (
            <div>
                <FormError error={errors}/>
                <FormSuccess success={success}/>
                <form method="post" onSubmit={this.handleSignup}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="email"
                               value={data.username}
                               placeholder={"Email"}
                               onChange={this.onEmailChange}
                               required/>
                        <small id="emailHelp" className="form-text text-muted">
                            Indtast en gyldig email adresse
                        </small>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="first_name"
                               placeholder={"Fornavn"}
                               value={data.first_name}
                               onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="last_name"
                               onChange={this.onChange}
                               placeholder={"Efternavn"}
                               value={data.last_name}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Adgangskode</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder={"Adgangskode"}
                               value={data.password}
                               onChange={this.onChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control"
                               name="conf_password"
                               placeholder={"Bekræft"}
                               value={data.conf_password}
                               onChange={this.onChange}
                               required/>
                        <small id="emailHelp" className="form-text text-muted">
                            Minimum 9 tegn med blanding af tal og bogstaver
                        </small>
                    </div>
                    <p className={"small text-left badge badge-light text-wrap text-secondary"} style={{padding: "10px"}}>
                        Når du trykker Opret accepterer du også vores <a href={"/betingelser"}>betingelser</a>
                    </p>
                    <button type="submit" className="btn btn-primary float-right">Opret</button>
                    <button type="button" className="btn btn-link float-left" onClick={this.handleCloseWindow}>Annullér</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SignupForm);
