import React from 'react'
import './SideBar.css'

const SideIcon = ({Icon,text}) => {
    // console.log(icon);
    return (
        <div  className='mb-3'
        
       >
            <Icon/> 
             <h7 className='ms-2'>{text}</h7>
            
        </div>
    )
}

export default SideIcon
