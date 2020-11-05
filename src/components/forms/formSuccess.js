import React from "react";

export default class FormSuccess extends React.Component {
    render() {
        let success = this.props.success;
        return (
            (success && <div className="alert alert-success">{success}</div>)
        )
    }
}
