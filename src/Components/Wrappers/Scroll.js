import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "auto", borderTop: "4px solid black", height: "calc(100vh - 160px)"}}>
            { props.children }
        </div>
    );
}

export default Scroll;