import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
    const [value,setValue]=useState('')
    // console.log(value);
    const submitHandler = (e)=>{
e.preventDefault();
onSubmit(value)
    }
    return (
        <div className='search-bar ui segment'>
            <form onSubmit={submitHandler} className="ui form">
                <div className="field">
                    <label > Video Search</label>
                    <input type="text"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    />
                </div>
            </form>
            
        </div>
    )
}

export default SearchBar
