import React, { useState } from 'react'
import Movies from './Movies'
import SearchBar from './SearchBar'

const App = () => {
    const [query,setQuery]=useState()
    const onQuery=(value)=>{
        // console.log(value);
            setQuery(value)
            console.log(query);
    }
    return (
        <div className="conatiner">
<SearchBar onsubmit={onQuery}/>
            <Movies  query={query}/>
        </div>
    )
}

export default App
