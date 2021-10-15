import React, { useState } from 'react'
import { useHistory } from 'react-router'
import {db} from './config'
const CreateForm = () => {
    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const [tag, setTag] = useState()
const histroy =useHistory()
    const adding=()=>{
        if(title===''&&link==='') return
        try{
            db.collection('bookmarks').add({
                title,
                link,
                tag
            })

            console.log('databse crtated');
            
            histroy.push('/booklist')
        }
        catch(e){
            console.log(e);
        }

        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('object');
        adding()
    }

    return (
        <div className="d-flex justify-content-center" style={{ margin: '30px', }}>


            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="React Js" />
                    <label htmlFor="exampleFormControlInput1" clasName="form-label">Link</label>
                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="netflix.in" />
                    <div className="mt-3">
                        <select value={tag} onChange={(e) => setTag(e.target.value)} className="form-select" aria-label="Default select example">
                            <option selected>Tags</option>
                            <option value="React">React</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Html & css">Html & css</option>
                        </select>
                    </div>
                    <button className="b mt-4 btn orange darken-1 fb8c00" >Submit Post</button>



                </div>
            </form>

        </div>
    )
}

export default CreateForm
