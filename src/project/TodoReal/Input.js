import React, { useState } from 'react'
import app from '../bookmanger/config'

const Input = () => {
    const [value,setValue]=useState()
    const handleSubmit=(e)=>{
e.preventDefault()
const todoRef=app.database().ref('Todo');
const todo={
    value,
    complete:false,
}
todoRef.push(todo)
console.log(todoRef);

console.log(value);
    }
    return (
        <div>
             <div className=" container" >
             <label for="exampleFormControlInput1" className="form-label">Add a Todo</label>

            <div class=" mt-4 mb-3 d-flex justify-content-center align-items-center " style={{ width: '50%', height: '' }}>
                <input type="text" 
                value={value} 
                onChange={(e)=>setValue(e.target.value)}
                className="form-control" id="exampleFormControlInput1" placeholder="" />
                <button onClick={handleSubmit} className="btn ms-2 waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>
            </div> 
        </div>
        </div>
    )
}

export default Input
