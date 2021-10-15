import React from 'react'
import useFireStore from './useFireStore'

const ImageGrid = ({setSelect}) => {
    const {docs}=useFireStore('images')
    console.log(docs);
    return (
        <div>
            <div className="img-grid">
                {docs&& docs.map(doc=>(
                    <div onClick={()=>setSelect(doc.url)} className="img-wrap" key={doc.id}>
                        <img src={doc.url} alt="uploaded Pics" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
