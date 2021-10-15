import React from 'react'

const Modal = ({image,setSelect}) => {
    console.log('object');
    console.log(image);
    const handaleClick=(e)=>{
        setSelect(null)
    }
    return (
        <div className="backdropp" onClick={handaleClick}>
          \
            <img src={image} alt="enlarged pics" />
        </div>
    )
}

export default Modal
