import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, NavLink,useHistory } from 'react-router-dom'
import { useAuth } from '../login/AuthContext';
import './Home.css'

export const Home = () => {
    const histroy=useHistory()

    

    function handleLogOut(){

        logout();
        histroy.push('signup')
    }
    const {currentUSer,logout}=useAuth()
    return (
        <div >
           
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, sit pariatur ex iure molestias, aliquid praesentium maxime dicta nulla explicabo accusantium consectetur quia. Quibusdam libero molestiae ea consequatur ipsum velit.
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Profile</h2>
                   <strong>Emai:</strong>
                   {currentUSer&&currentUSer.email}
               </Card.Body>
               <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>
                    Log Out
                </Button>
               </div>
           </Card>

        </div>
    )
}
