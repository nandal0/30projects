import React, { useState } from 'react'

const SearchBar = ({onsubmit}) => {
    const [value,setValue]=useState()
    const submtiHanler=(e)=>{
        e.preventDefault()
        console.log(value)
        onsubmit(value);

    }

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form onSubmit={submtiHanler} class="d-flex">
      <input class="form-control me-2"
    value={value}
    onChange={(e) => setValue(e.target.value)}
      type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default SearchBar
