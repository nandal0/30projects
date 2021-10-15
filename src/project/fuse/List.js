import React, { useEffect, useState } from 'react'

const List = ({setvalue}) => {
  console.log(setvalue);

   
    const [lists,setList]=useState([])
    const getRick=async()=>{
        const data = await fetch('https://rickandmortyapi.com/api/character')
        const results = await data.json()
        console.log(results);
        setList(results.results)
        
        console.log(lists);
        {lists&&setvalue(lists)}
    }
    useEffect(() =>{
        getRick();
    },[])
    // const lis=lists[0]
    // console.log(lis);

    return (
        <div>
            

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
            {/* <Search lists={lists}/> */}

        </div>
    )
}

export default List
