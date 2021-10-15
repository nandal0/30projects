import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import './HeaderButton.css'

import { CartContext } from '../../Store/CartProvider'

function HeaderButton(props) {


    const cartContext=useContext(CartContext)

    const numberOfCartItems=cartContext.items.reduce((curNumber,item)=>{
            return (curNumber+item.amount);
    },0)

    return (
        <button  onClick={props.onClick}className='button'> 
            <span className='icon'>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderButton
