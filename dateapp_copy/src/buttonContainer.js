import React from "react";

const buttonContainer = ({children}) => {
    return (
        <div className = "button-flex-container">
            {children}
        </div>
    );
};

export default buttonContainer;