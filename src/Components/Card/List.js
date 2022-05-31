import React from "react";
import Card from "../Card";
import Error from "../Error";

const CardList = (props) => {
    return (
        <>
            {
                props.robots.length === 0 ?
                <Error message={"No Robots Found."} /> :
                props.robots.map((robot, index) => {
                    return (
                        <Card key={index} 
                            id={robot.id} 
                            name={robot.name} 
                            username={robot.username} 
                            email={robot.email} />
                    );
                })
            }
        </>
    );
}

export default CardList;