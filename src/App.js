import React, {useState} from "react";
import Dash from "./movie/Dash";
import {Credentials} from "./Credentials";
import Login from "./Login/login";
import __ from "lodash/fp/__";


const App = () => {
    const login = () => {

    }
    const [switcher, setSwitcher] = useState(true);
    const HandleState = () => {
        setSwitcher(!switcher);
    }

    return (switcher ? <Login stateChanger={HandleState}/> : <Dash stateChanger={HandleState}/>)


}

export default App;
