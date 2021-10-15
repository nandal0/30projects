import React, { useContext } from 'react'

import './Cart.css'
import Modal from '././../UI/Modal'
import { CartContext } from '../../Store/CartProvider';
import CartItem from './CartItem';


function Cart(props) {

    const cartContext=useContext(CartContext)

    const totalAmount=`$${cartContext.totalAmount.toFixed(2)}`
    const hasItems=cartContext.items.length>0;

    const cartItemRemoveHandler=id=>{
        cartContext.removeItem(id)
    }

    const cartItemAddHandler=item=>{
        console.log('add');
        cartContext.addItem(item)
    }
    console.log("cart hleo");
    const cartItems=(
        <ul className="cart-items">
            {
            cartContext.items.map((itme)=>(
                <CartItem 
                key={itme.id}
                name={itme.name}
                amount={itme.amount}
                price={itme.price}
                onRemove={cartItemRemoveHandler.bind(null,itme.id)}
                onAdd={cartItemAddHandler.bind(null,itme)}/>
            ))}
            
        </ul>
    )
    
    return (
        <Modal onclick={props.onhide}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button  
                onClick={props.onhide}
                className="button--alt">Close</button>
{        hasItems&&        <button className="button">Order</button>
}            </div>
        </Modal>
    )
}

export default Cart
