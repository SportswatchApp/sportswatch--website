import React from "react";
import {RedocStandalone} from "redoc";

class ApiDocumentationPage extends React.Component {
    render() {
        return (
            <RedocStandalone
                specUrl="http://127.0.0.1:8000/openapi/"
                options={{
                    theme: { colors: { primary: { main: '#dd5522' } } },
                }}
            />
        );
    }
}

export default ApiDocumentationPage;
