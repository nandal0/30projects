import axios from 'axios'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import unsplas from './unsplas'
import Image from './Image'
import './Search.css'


const Search = () => {
    const [image,setImage]=useState() 

   const  onSubmit = async (term) => {
      const response = await unsplas.get('/search/photos',{
            params: {query: term},
            
        })
        setImage(response.data.results)
        console.log(response.data.results);
    }
    return (
        <div className="ui container" style={{color: 'white',marginTop:'10px'}}>
            <SearchBar  onValue={onSubmit} />
           {image&& <Image image={image}/>}
        </div>
    )
}

export default Search
