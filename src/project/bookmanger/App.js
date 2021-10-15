import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import BookList from './BookList'
import CreateForm from './CreateForm'
import Menu from './Menu'


const App = () => {
    const [change,setChange]=useState('')
    return (
        <div>
            <Menu/>

            <Switch >
                <Route exact path="/booklist" component={BookList}/>
                <Route exact path="/" component={CreateForm}/>
            </Switch>
        </div>
    )
}

export default App
