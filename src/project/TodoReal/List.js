import React, { useEffect, useState } from 'react'
import app from '../bookmanger/config'
import Todo from './Todo'

const List = () => {
   const [todolist,setTodoList]=useState([])
   useEffect(() => {
       const todoRef=app.database().ref('Todo')
       todoRef.on('value',(sanpshot)=>{
           const todos=sanpshot.val();
           console.log(todos);
           const todoList=[]
           for(let id in todos){
               todoList.push({id,...todos[id]})
           }
           console.log(todoList);
           setTodoList(todoList);
           console.log(todolist);
       })
   },[])
    return (
        <div>
            {todolist?todolist.map((todo)=><Todo todo={todo}/>):''}
        </div>
    )
}

export default List
