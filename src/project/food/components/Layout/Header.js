
import React from 'react'

import meal from './Meals.jpg'
import './Header.css'
import HeaderButton from './HeaderButton'

function Header(props) {
    return (
        <div>
            <header className="header">
                <h1>ReactMeasl</h1>
                <button><HeaderButton 
                onClick={props.onShowCart}
                /></button>

            </header>
            <div className="main-image">
                <img src={meal} alt="A table food " />
            </div>
        </div>
    )
}

export default Header
