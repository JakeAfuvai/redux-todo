import React from "react"
import Navbar from "./Navbar"
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import TodoList from "./TodoList"
import "./App.css"

const App = props => {
    return (
        <>
            <Navbar />
            <Switch>
                {/* <Route exact path="/" component={Home}/>
                <Route path="/todo_list" component={TodoList}/> */}
                <Route exact path="/"><Home /></Route>
                <Route path="/todo_list"><TodoList /></Route>
            </Switch>
        </>
    )
}

export default App