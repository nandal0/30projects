import React, { useState } from 'react'
// import './App.css'
import UserList from './UserList'
import Youtube from './Youtube'

export default function App() {
  const [userList,setUserList]=useState([])

  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge}]
    })
  }
  return (
    <div className="Appp">
      
      <div className="App-headesrs">
        
        {/* <h3>Youtube</h3> */}
        <Youtube name="sagar" onAddUser={addUserHandler}/>
        <UserList users={userList}/>
        
      </div>
    </div>
  )
}
