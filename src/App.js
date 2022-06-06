import React,{useState} from "react";
import Login from "./Login/login"
import Dashboard from "./Dashboard";

const App= ()=> {
    const [switcher, setSwitcher] = useState(true);
    const HandleState=()=>{
        setSwitcher(!switcher);
    }
    if (switcher){
        return<Login stateChanger={HandleState}/>

    }
    else {
        return <Dashboard stateChanger={HandleState}/>
    }
}

export default App;
