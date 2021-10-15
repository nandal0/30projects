import { SearchOutlined } from '@material-ui/icons'
import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <SearchOutlined/>
            <input type="text" placeholder="What are you looking for" />
        </div>
    )
}

export default SearchBar
