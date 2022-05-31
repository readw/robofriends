import React from "react";

const Error = ({ message }) => {
    return (
        <div className="tc pa2 mt2 bg-red w-50 br2 center">{message}</div>
    );
}

export default Error;