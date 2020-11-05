import React from "react";

export default class FormError extends React.Component {
    render() {
        let error = this.props.error;
        return (
            (error && <div className="alert alert-danger text-left">{error}</div>)
        )
    }
}
