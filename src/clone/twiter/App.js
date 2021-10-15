import React from 'react'
import SideBar from './components/sidebar/SideBar'
import './App.css'
import Feed from './components/feed/Feed'
const App = () => {
    return (
        <div  className="app">
        <SideBar/>
        <Feed/>
        </div>
    )
}

export default App
