import React, { useState } from 'react'

import ProgressBar from './ProgressBar'
const Upload = () => {
    const [file,setFile]=useState()
    const [error,setError]=useState()

    const types=['image/png', 'image/jpeg', ]
    const hanldeEvent = (e)=>{
e.preventDefault()
let selected=e.target.files[0]
    if(selected&&types.includes(selected.type))
{setFile(selected)
setError('')

}
else{
    setFile(null)
    setError('Please select an image file (png or jpeg)')
}


}

    return (
        <div>
            
            <input type="file"  onChange={hanldeEvent}/>
            <div className="output">
                {error&&<div className="error">{error}</div>}
                {file&&<div>{file.name}</div>}
                {file&& <ProgressBar  file={file} setFile={setFile} />}
            </div>
        </div>
    )
}

export default Upload
