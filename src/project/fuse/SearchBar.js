import React, { useState } from 'react'
import Fuse from 'fuse.js';
const SearchBar = ({data}) => {
    const [query,setQuery]=useState()
    console.log(data);
    console.log(query);
    const fuse=new Fuse(data,{
        keys:['name',
    'Species']
    });
    const result = fuse.search(query)
    console.log(result);
    const lists=query?result.map(result=>result.item):data;
    console.log(lists);
    return (
        <div>
            <input type="text" 
            value={query} 
            onChange={(e) =>setQuery(e.target.value)}
            />
             {
                lists&&lists.map((lis)=>{
                    return(
                        <div key={lis.id} className="card mb-3" style={{maxWidth: "500px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={lis.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><b>Name: &nbsp; </b>{lis.name}</h5>
        <p className="card-text"><b>Species  &nbsp; </b>{lis.species}</p>
        <p className="card-text"><small className="text-muted"><b>Locaition</b>: &nbsp; {lis.location.name}</small></p>
      </div>
    </div>
  </div>
</div>
                    )
                })
            }
        </div>
    )
}

export default SearchBar