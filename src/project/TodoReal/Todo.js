import React, { useState } from 'react'
import { dtb } from '../bookmanger/config';

const Todo = ({ todo }) => {
    const[newValue,setNewValue]=useState(todo.value)
    // console.log(todo);
    const completed = () => {
        console.log('sde');
    }
    const edited = () => {
        // console.log('sde');
        const todoRef=dtb.ref('Todo').child(todo.id)
        todoRef.update({
            value:newValue,
        })
    }
    const deleted = () => {
        const todoRef = dtb.ref('Todo').child(todo.id)
        todoRef.remove()
    }
    return (
        <div>
            <div style={{ width: '50%', height: '' }} className="alert alert-info d-flex justify-content-between" role="alert">
                <li className="d-flex justify-content-between" style={{ listStyle: 'none', border: 'none', }}>
                    <input style={{ border: 'none', width:'160px' }} type="text"
                    value={newValue}
                    onChange={(e)=>setNewValue(e.target.value)}
                    />
                    <div className="d-flex justify-content-between" style={{ marginLeft: '100px', backgroundColor: '', height: '30px', cursor: 'pointer' }}>

                        <i onClick={completed} class="material-icons mt-3">add</i>
                        <i onClick={edited} class="material-icons mt-3">edit</i>
                        <i onClick={deleted} class="material-icons mt-3">delete</i>
                    </div>
                </li>

            </div>
        </div>
    )
}

export default Todo
