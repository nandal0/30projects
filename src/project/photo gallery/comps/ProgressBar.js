import React, { useState } from 'react'
import useStorage from './UseStorage'

const ProgressBar = ({file,setFile}) => {
    const {url,progress}=useStorage(file)
    console.log(progress,url);
    useState(()=>{
        if(url){
            setFile(null)
        }
    },[url,setFile])
    return (
        <div>
            <div className="progress-bar" style={{width:progress+'%'}}></div>
        </div>
    )
}

export default ProgressBar
