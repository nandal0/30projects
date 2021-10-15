import React, { useRef, useState } from 'react'
import Card from './Card';
import Button from './Button';
import './Youtube.css'
import ErrorModal from './ErrorModal';


function Youtube(props) {
    const Rname=useRef();
    const Rage=useRef();
    console.log(props);

    // const [name,setName]=useState('')
    // const [age,setAge]=useState('')
    const addUserHandle=(e)=>{

        const name=Rname.current.value;
        const age=Rage.current.value;
        e.preventDefault();
        if(name.trim().length===0 || age.trim().length===0){
            return ;
        }
        if(age<1){
            return;
        }
        props.onAddUser(name,age)
        // setName('')
        // setAge('')

    }
    return (
       <div>
           <ErrorModal title="an error has occurred" message="Something went wrong"/>

            <Card className="input">
           <form onSubmit={addUserHandle}>
                
            <label htmlFor="username">Username</label>
            <input type="text" id="username" 

            // value={name} 
            //  onChange={(e)=>setName(e.target.value)}
             ref={Rname}
             />
            <label htmlFor="age" >Age</label>
            <input 

            type="number" id="age"
            // value={age}  
            // onChange={(e)=>setAge(e.target.value)}
            ref={Rage}
            />
            <Button type="submit">Add User</Button>
           </form>
        </Card>
       </div>
    )
}

export default Youtube
