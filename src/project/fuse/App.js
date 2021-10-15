import React, { useState } from 'react'
import List from './List'
// import Search from './Search'
import SearchBar from './SearchBar'

const App = () => {
    const [data,setData]=useState([])
    const setdata=(value)=>{
        console.log(value);
        setData(value)
    }
    console.log(data);
    return (
        <div  className='container'>
             <SearchBar data={data} />
            <List setvalue={setdata}/>
           
        </div>
    )
}

export default App
