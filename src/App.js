import React from "react"
import {connect} from "react-redux"

const App = props => {
    console.log(props)
    const mappedTodos = props.state.todos.map(todo=><h1>{todo}</h1>)
    return (
        <div>
            Hello
            {mappedTodos}
        </div>
    )
}


const mapStateToProps = globalState => ({
    state: globalState
})

export default connect(mapStateToProps, {})(App)