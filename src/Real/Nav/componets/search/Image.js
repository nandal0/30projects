import React from 'react'

const Image = ({image}) => {
    const images=image.map((ima)=>{
        console.log('helo');
        return <img alt={ima.description} key={ima.id} src={ima.urls.regular}/>
    })
    console.log(images);
    return (
        <div>
           <div className="raju">{images}</div>
        </div>
    )
}

export default Image
