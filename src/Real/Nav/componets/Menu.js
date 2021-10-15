import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'


export const Menu = () => {
    return (
       
    <div className="navigation">
           <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ></input>
         <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            
        
        <nav className="navigation__nav" >
            <ul className="navigation__list" >
            <li className="navigation__item">
          <NavLink className="a" activeClassName="" to='/'>
                Home
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/links'>
                cv/Resume
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/category'>
                Create a blog
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/blogs'>
                Blogs
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/tags'>
                Tags
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/search'>
                Search
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/about'>
                About Us
            </NavLink></li>
            <li className="navigation__item">
            <NavLink className="a" activeClassName="" to='/signup'>
                Signup
            </NavLink></li>
            </ul>
           </nav>
        </div>
         
         

     )
    }
