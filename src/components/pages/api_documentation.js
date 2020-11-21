import React from "react";
import {RedocStandalone} from "redoc";

class ApiDocumentationPage extends React.Component {
    render() {
        return (
            <RedocStandalone
                specUrl="https://test.sportswatchapp.dk/openapi/"
                options={{
                    theme: { colors: { primary: { main: '#dd5522' } } },
                }}
            />
        );
    }
}

export default ApiDocumentationPage;
