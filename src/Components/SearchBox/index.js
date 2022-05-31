import React from "react";

const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input className="br2 pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots..." 
                onChange={(event) => props.onChangeHandler(event.target.value)} />
        </div>
    );
}

export default SearchBox;