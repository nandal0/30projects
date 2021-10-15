import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
            <NavLink className="ms-4" activeClassName="" to='/booklist'>
                Home
            </NavLink>
            <NavLink className="ms-4" activeClassName="" to='/'>
                Create a new bookmark
            </NavLink>

            </nav>
            
             
        </div>
    )
}

export default Menu
