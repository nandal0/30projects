import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid'
import Upload from './comps/Upload'
import Modal from './comps/Modal'

const App = () => {
   
    const [select,setSelect]=useState(null)
    console.log(select);
    return (
        <div>
            
            <Upload/>
            <ImageGrid setSelect={setSelect}/>
            {select  && <Modal  image={select} setSelect={setSelect}/>}

        </div>
    )
}

export default App
