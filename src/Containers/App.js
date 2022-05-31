import React, { useEffect, useState } from "react";

import CardList from "../Components/Card/List";
import SearchBox from "../Components/SearchBox";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Scroll from "../Components/Wrappers/Scroll";

import "./App.css";

const App = () => {

    const [search, setSearch] = useState("");
    const [robots, setRobots] = useState([]);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(robots => setRobots([...robots]))
        .catch(err => setHasError(true));
    }, [robots]);
    
    return (
        <main className="tc">
            {
                robots.length === 0 ? 
                <Loading /> :
                <>
                    <>
                        <h1 className="f2">RoboFriends</h1>
                        <SearchBox onChangeHandler={(value) => setSearch(value)} />
                    </>
                    <>
                        {
                            hasError ?
                            <Error message={"Error has occured loading RobotFriends."} /> :
                            <Scroll>
                                <CardList robots={(robots || []).filter(robot => 
                                    robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
                                    robot.username.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
                                    robot.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                )} />
                            </Scroll>
                        }
                    </>
                </>
            }
        </main>
    )
}

export default App;